import sys
import mariadb
import os
import logging
logger = logging.getLogger()
logger.setLevel('DEBUG')
BASIC_FORMAT = "%(asctime)s - %(filename)s[line:%(lineno)d] - %(levelname)s: %(message)s"
DATE_FORMAT = '%Y-%m-%d %H:%M:%S'
formatter = logging.Formatter(BASIC_FORMAT, DATE_FORMAT)
# 输出到控制台的handler
chlr = logging.StreamHandler()
chlr.setFormatter(formatter)
chlr.setLevel('INFO')  # 也可以不设置，不设置就默认用logger的level
# 输出到文件的handler
fhlr = logging.FileHandler('output.log')
fhlr.setFormatter(formatter)
logger.addHandler(chlr)
logger.addHandler(fhlr)

path = "D:\\apps\\gcisreport\\output\\zipped\\202109"

def get_entry(entry):
    entries = {
        "average_buffer_usage": "Average_Buffer_Usage",
        "average_connection_count": "Average_Connection_Count",
        "average_key_efficiency": "Average_Key_Efficiency",
        "average_traffic": "Average_Traffic",
        "cpu": "CPU",
        "cpu_utilizaiton": "CPU_Utilizaiton",
        "data_size": "Data_Size",
        "delete_count": "Delete_Count",
        "disk_utilizaiton": "Disk_Utilizaiton",
        "insert_count": "Insert_Count",
        "memory": "Memory",
        "memory_utilizaiton": "Memory_Utilizaiton",
        "network": "Network",
        "query_count": "Query_Count",
        "read_count": "Read_Count",
        "update_count": "Update_Count",
        "write_count": "Write_Count",
    }
    return entries.get(entry.lower(), None)


# Connect to MariaDB Platform
try:
    conn = mariadb.connect(
        # user="mssspspu10",
        # password="P@ssw0rd",
        # host="172.25.101.113",
        # port=19307,
        # database="tmssspsp1"
        user="mssspspp11",
        password="P@ssw0rd",
        host="172.21.103.13",
        port=19307,
        database="pmssspsp1",
        ssl=True
    )
except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)

# Get Cursor
cur = conn.cursor()
gcisIdQuerySql = "select id, gcis_id from sys_gcis_profile where gcis_id = ?"
querySql = "select id from tb_usage_report_data where title = ?"
insertSql = "INSERT INTO tb_usage_report_data(gcis_id, `type`, entry, `date`, contents, title, environment, service)" \
            "VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
updateSql = "update tb_usage_report_data set contents = ? where id = ?"

for file in os.listdir(path):
    try:
        logging.info("Handling %s.", file)

        splitArray1 = file.split("_")
        splitArray2 = file.split("-")

        isValid = True

        if splitArray1[1].lower() == 'dbaas':
            service = 'DBaaS'
        elif splitArray1[1].lower() == 'iaas':
            service = 'IaaS'
        else:
            isValid = False

        if splitArray1[2].lower() == 'monthly':
            type = 'Monthly'
        else:
            isValid = False

        entry = get_entry(file[file.find(type) + len(type) + 1:file.find("_Report")])
        if entry is None:
            isValid = False

        yyyyMM = splitArray2[-1].split(".")[0]
        date = yyyyMM[0:4] + "-" + yyyyMM[4:6] + "-" + "01"
        # datetime.datetime.strptime(date, '%Y-%m-%d')

        if splitArray2[1].lower() == 'prd':
            environment = 'PRD'
        elif splitArray2[1].lower() == 'test':
            environment = 'TEST'
        else:
            isValid = False

        gcisId = splitArray2[2];
        cur.execute(gcisIdQuerySql, (gcisId,))
        gcisIdData = cur.fetchone()

        if not isValid:
            logging.error("%s is not the supported file.", file)
            continue

        if gcisIdData is None:
            logging.error("%s cannot find gcisid[%s].", file, gcisId)
            continue
        else:
            gcisId = gcisIdData[0]

        contents = open(os.path.join(path, file), 'rb').read()
        cur.execute(querySql, (file,))
        dbFile = cur.fetchone()

        if dbFile is None:
            cur.execute(insertSql, (gcisId, type, entry, date, contents, file, environment, service,))
            logging.info("Insert %s success.", file)
        else:
            cur.execute(updateSql, (contents, dbFile[0],))
            logging.info("Update %s success.", file)

        conn.commit()
    except Exception as e:
        logging.error(e)
