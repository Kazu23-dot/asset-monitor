from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
from psycopg2 import Error, connect
from psycopg2.extras import DictCursor 

HOUSE_HOLD_BUDGET_MONTHLY_SQL = "select * from (select Jan.category, Jan.Jan, Feb.Feb, Mar.Mar, Apr.Apr, May.May, Jun.Jun, Jul.Jul, Aug.Aug, Sep.Sep, Oct.Oct, Nov.Nov, Dec.Dec, Total.Total from (select category, sum(bop_value) as Jan from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '01' group by category) Jan left outer join (select category, sum(bop_value) as Feb from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '02' group by category) Feb on Jan.category = Feb.category left outer join (select category, sum(bop_value) as Mar from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '03' group by category) Mar on Jan.category = Mar.category left outer join (select category, sum(bop_value) as Apr from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '04' group by category) Apr on Jan.category = Apr.category left outer join (select category, sum(bop_value) as May from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '05' group by category) May on Jan.category = May.category left outer join (select category, sum(bop_value) as Jun from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '06' group by category) Jun on Jan.category = Jun.category left outer join (select category, sum(bop_value) as Jul from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '07' group by category) Jul on Jan.category = Jul.category left outer join (select category, sum(bop_value) as Aug from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '08' group by category) Aug on Jan.category = Aug.category left outer join (select category, sum(bop_value) as Sep from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '09' group by category) Sep on Jan.category = Sep.category left outer join (select category, sum(bop_value) as Oct from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '10' group by category) Oct on Jan.category = Oct.category left outer join (select category, sum(bop_value) as Nov from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '11' group by category) Nov on Jan.category = Nov.category left outer join (select category, sum(bop_value) as Dec from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' and to_char(bop_date, 'MM') = '12' group by category) Dec on Jan.category = Dec.category left outer join (select category, sum(bop_value) as Total from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '収入' group by category) Total on Jan.category = Total.category union select Jan.category, Jan.Jan, Feb.Feb, Mar.Mar, Apr.Apr, May.May, Jun.Jun, Jul.Jul, Aug.Aug, Sep.Sep, Oct.Oct, Nov.Nov, Dec.Dec, Total.Total from (select category, sum(bop_value) as Jan from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '01' group by category) Jan left outer join (select category, sum(bop_value) as Feb from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '02' group by category) Feb on Jan.category = Feb.category left outer join (select category, sum(bop_value) as Mar from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '03' group by category) Mar on Jan.category = Mar.category left outer join (select category, sum(bop_value) as Apr from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '04' group by category) Apr on Jan.category = Apr.category left outer join (select category, sum(bop_value) as May from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '05' group by category) May on Jan.category = May.category left outer join (select category, sum(bop_value) as Jun from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '06' group by category) Jun on Jan.category = Jun.category left outer join (select category, sum(bop_value) as Jul from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '07' group by category) Jul on Jan.category = Jul.category left outer join (select category, sum(bop_value) as Aug from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '08' group by category) Aug on Jan.category = Aug.category left outer join (select category, sum(bop_value) as Sep from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '09' group by category) Sep on Jan.category = Sep.category left outer join (select category, sum(bop_value) as Oct from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '10' group by category) Oct on Jan.category = Oct.category left outer join (select category, sum(bop_value) as Nov from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '11' group by category) Nov on Jan.category = Nov.category left outer join (select category, sum(bop_value) as Dec from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' and to_char(bop_date, 'MM') = '12' group by category) Dec on Jan.category = Dec.category left outer join (select category, sum(bop_value) as Total from t_bop_hst where to_char(bop_date, 'YYYY') = '%param%' and category = '支出' group by category) Total on Jan.category = Total.category) Main order by Main.category desc"

HOUSE_HOLD_BUDGET_ANNUAL_SQL = "select * from (select \"Year01\".category, \"Year01\".\"%param_01%年\", \"Year02\".\"%param_02%年\", \"Year03\".\"%param_03%年\", \"Year04\".\"%param_04%年\", \"Year05\".\"%param_05%年\", \"Year06\".\"%param_06%年\", \"Year07\".\"%param_07%年\", \"Year08\".\"%param_08%年\", \"Year09\".\"%param_09%年\", \"Year10\".\"%param_10%年\" from (select category, sum(bop_value) as \"%param_01%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_01%' and category = '収入' group by category) \"Year01\" left outer join (select category, sum(bop_value) as \"%param_02%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_02%' and category = '収入' group by category) \"Year02\" on \"Year01\".category = \"Year02\".category left outer join (select category, sum(bop_value) as \"%param_03%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_03%' and category = '収入' group by category) \"Year03\" on \"Year01\".category = \"Year03\".category left outer join (select category, sum(bop_value) as \"%param_04%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_04%' and category = '収入' group by category) \"Year04\" on \"Year01\".category = \"Year04\".category left outer join (select category, sum(bop_value) as \"%param_05%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_05%' and category = '収入' group by category) \"Year05\" on \"Year01\".category = \"Year05\".category left outer join (select category, sum(bop_value) as \"%param_06%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_06%' and category = '収入' group by category) \"Year06\" on \"Year01\".category = \"Year06\".category left outer join (select category, sum(bop_value) as \"%param_07%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_07%' and category = '収入' group by category) \"Year07\" on \"Year01\".category = \"Year07\".category left outer join (select category, sum(bop_value) as \"%param_08%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_08%' and category = '収入' group by category) \"Year08\" on \"Year01\".category = \"Year08\".category left outer join (select category, sum(bop_value) as \"%param_09%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_09%' and category = '収入' group by category) \"Year09\" on \"Year01\".category = \"Year09\".category left outer join (select category, sum(bop_value) as \"%param_10%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_10%' and category = '収入' group by category) \"Year10\" on \"Year01\".category = \"Year10\".category union select \"Year01\".category, \"Year01\".\"%param_01%年\", \"Year02\".\"%param_02%年\", \"Year03\".\"%param_03%年\", \"Year04\".\"%param_04%年\", \"Year05\".\"%param_05%年\", \"Year06\".\"%param_06%年\", \"Year07\".\"%param_07%年\", \"Year08\".\"%param_08%年\", \"Year09\".\"%param_09%年\", \"Year10\".\"%param_10%年\" from (select category, sum(bop_value) as \"%param_01%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_01%' and category = '支出' group by category) \"Year01\" left outer join (select category, sum(bop_value) as \"%param_02%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_02%' and category = '支出' group by category) \"Year02\" on \"Year01\".category = \"Year02\".category left outer join (select category, sum(bop_value) as \"%param_03%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_03%' and category = '支出' group by category) \"Year03\" on \"Year01\".category = \"Year03\".category left outer join (select category, sum(bop_value) as \"%param_04%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_04%' and category = '支出' group by category) \"Year04\" on \"Year01\".category = \"Year04\".category left outer join (select category, sum(bop_value) as \"%param_05%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_05%' and category = '支出' group by category) \"Year05\" on \"Year01\".category = \"Year05\".category left outer join (select category, sum(bop_value) as \"%param_06%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_06%' and category = '支出' group by category) \"Year06\" on \"Year01\".category = \"Year06\".category left outer join (select category, sum(bop_value) as \"%param_07%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_07%' and category = '支出' group by category) \"Year07\" on \"Year01\".category = \"Year07\".category left outer join (select category, sum(bop_value) as \"%param_08%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_08%' and category = '支出' group by category) \"Year08\" on \"Year01\".category = \"Year08\".category left outer join (select category, sum(bop_value) as \"%param_09%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_09%' and category = '支出' group by category) \"Year09\" on \"Year01\".category = \"Year09\".category left outer join (select category, sum(bop_value) as \"%param_10%年\" from t_bop_hst where to_char(bop_date, 'YYYY') = '%param_10%' and category = '支出' group by category) \"Year10\" on \"Year01\".category = \"Year10\".category) main order by main.category desc"
HOUSE_HOLD_BUDGET_SQL_TEST = "select * from (select Jan.category, Jan.Jan, Feb.Feb, Mar.Mar, Apr.Apr, May.May, Jun.Jun, Jul.Jul, Aug.Aug, Sep.Sep, Oct.Oct, Nov.Nov, Dec.Dec, Total.Total from (select category, sum(bop_value) as Jan from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '01' group by category) Jan left outer join (select category, sum(bop_value) as Feb from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '02' group by category) Feb on Jan.category = Feb.category left outer join (select category, sum(bop_value) as Mar from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '03' group by category) Mar on Jan.category = Mar.category left outer join (select category, sum(bop_value) as Apr from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '04' group by category) Apr on Jan.category = Apr.category left outer join (select category, sum(bop_value) as May from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '05' group by category) May on Jan.category = May.category left outer join (select category, sum(bop_value) as Jun from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '06' group by category) Jun on Jan.category = Jun.category left outer join (select category, sum(bop_value) as Jul from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '07' group by category) Jul on Jan.category = Jul.category left outer join (select category, sum(bop_value) as Aug from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '08' group by category) Aug on Jan.category = Aug.category left outer join (select category, sum(bop_value) as Sep from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '09' group by category) Sep on Jan.category = Sep.category left outer join (select category, sum(bop_value) as Oct from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '10' group by category) Oct on Jan.category = Oct.category left outer join (select category, sum(bop_value) as Nov from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '11' group by category) Nov on Jan.category = Nov.category left outer join (select category, sum(bop_value) as Dec from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' and to_char(bop_date, 'MM') = '12' group by category) Dec on Jan.category = Dec.category left outer join (select category, sum(bop_value) as Total from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '収入' group by category) Total on Jan.category = Total.category union select Jan.category, Jan.Jan, Feb.Feb, Mar.Mar, Apr.Apr, May.May, Jun.Jun, Jul.Jul, Aug.Aug, Sep.Sep, Oct.Oct, Nov.Nov, Dec.Dec, Total.Total from (select category, sum(bop_value) as Jan from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '01' group by category) Jan left outer join (select category, sum(bop_value) as Feb from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '02' group by category) Feb on Jan.category = Feb.category left outer join (select category, sum(bop_value) as Mar from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '03' group by category) Mar on Jan.category = Mar.category left outer join (select category, sum(bop_value) as Apr from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '04' group by category) Apr on Jan.category = Apr.category left outer join (select category, sum(bop_value) as May from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '05' group by category) May on Jan.category = May.category left outer join (select category, sum(bop_value) as Jun from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '06' group by category) Jun on Jan.category = Jun.category left outer join (select category, sum(bop_value) as Jul from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '07' group by category) Jul on Jan.category = Jul.category left outer join (select category, sum(bop_value) as Aug from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '08' group by category) Aug on Jan.category = Aug.category left outer join (select category, sum(bop_value) as Sep from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '09' group by category) Sep on Jan.category = Sep.category left outer join (select category, sum(bop_value) as Oct from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '10' group by category) Oct on Jan.category = Oct.category left outer join (select category, sum(bop_value) as Nov from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '11' group by category) Nov on Jan.category = Nov.category left outer join (select category, sum(bop_value) as Dec from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' and to_char(bop_date, 'MM') = '12' group by category) Dec on Jan.category = Dec.category left outer join (select category, sum(bop_value) as Total from t_bop_hst where to_char(bop_date, 'YYYY') = '2023' and category = '支出' group by category) Total on Jan.category = Total.category) Main order by Main.category desc"

#FastAPIのインスタンス生成
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

##リクエスト毎に処理##
## @app.post()
## @app.put()
## @app.delete()
@app.get("/")
def Hello():
    return {"Hello":"##World!##","TEST":"Test-Message"}

@app.get("/test/")
async def Test(YEAR: str = ""):
    strRtn = YEAR
    # return {"Test":"##++World!++##","TEST":"Test-Message"},{"Test2":"##++!++##","TEST2":"######"},{"Test3":"##++!++##","TEST3":"######"}
    # return {"name": "01","incomme": "2000","expense": "700","stock": "1300","stocktrans": "1300"},{"name": "02","incomme": "1800","expense": "900","stock": "900","stocktrans": "900"},{"name": "03","incomme": "3000","expense": "1100","stock": "1900","stocktrans": "1900"}
    return get_db_data(HOUSE_HOLD_BUDGET_SQL_TEST)

#######################
##   月毎推移データ   ##
#######################
@app.get("/Sql/HouseholdBudget/Monthly/")
async def SqlHouseholdBudget(YEAR: str = ""):
    strSql = HOUSE_HOLD_BUDGET_MONTHLY_SQL
    strSql =  strSql.replace('%param%', YEAR)
    return get_db_data(strSql)

#######################
##   年次推移データ   ##
#######################
@app.get("/Sql/HouseholdBudget/Annual/")
async def SqlHouseholdBudget(YEAR: str = ""):
    # 配列に格納
    strYearAry = YEAR.split(',')
    # print(strYearAry[0]+strYearAry[1]+strYearAry[2])
    # 配列内の昇順にソート
    strYearAry.sort()
    # print(strYearAry[0]+strYearAry[1])
    intBlankCnt = 10 - len(strYearAry)

    for i in range(1,intBlankCnt+1):
        strColSL = 'NN' + '%02d' % int(i)
        strYearAry.append(strColSL)


    # SQL設定
    strSql = HOUSE_HOLD_BUDGET_ANNUAL_SQL
    # SQLに各種パラメータ設定
    strSql =  strSql.replace("%param_01%", strYearAry[0])
    strSql =  strSql.replace("%param_02%", strYearAry[1])
    strSql =  strSql.replace("%param_03%", strYearAry[2])
    strSql =  strSql.replace("%param_04%", strYearAry[3])
    strSql =  strSql.replace("%param_05%", strYearAry[4])
    strSql =  strSql.replace("%param_06%", strYearAry[5])
    strSql =  strSql.replace("%param_07%", strYearAry[6])
    strSql =  strSql.replace("%param_08%", strYearAry[7])
    strSql =  strSql.replace("%param_09%", strYearAry[8])
    strSql =  strSql.replace("%param_10%", strYearAry[9])
    # 複数対象年を設定した際に1番目の配列の年にスペースが含まれてしまいうまく動作しなくなるため下記2行でスペースをリプレース
    strSql =  strSql.replace("\" ", "\"")
    strSql =  strSql.replace("\' ", "\'")
    print(strSql)
    return get_db_data(strSql)

@app.get("/SqlResult/")
def SqlResult():
    strSql =  HOUSE_HOLD_BUDGET_SQL
    return get_db_data(strSql)
    
### DB接続処理 ###
def get_db_data(param):
    try:
     connection = psycopg2.connect(host="localhost",user="portfoliouser",password="portfoliouser",dbname="postgres",port="5499")
     #cursor = connection.cursor()
     cursor = connection.cursor(cursor_factory=DictCursor)
     cursor.execute(param)
     #cursor.execute("select to_json(test_table) from test_table;")
     #cursor.execute("select to_json(test_table) from test_table limit 1;")
     records = cursor.fetchall()
     #カラム名を表示#
     print(cursor.description)
     #レコード内容を表示#
     print(records)
     for record in records:
        print(record)
    except ZeroDivisionError as e:
        print('catch ZeroDivisionError', e)
    finally:
        cursor.close()
        connection.close()
        print('all finish')
        return records