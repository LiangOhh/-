#  MySql

DataBase  简称DB,MySql默认端口号**3306**

**`.sql`**后缀为sql脚本

```mysql
--source 执行 sql脚本
source   `path(.sql)`
```

## 数据库概述

+ DB: 数据库
+ DBMS: 数据库管理系统（MySql、Oracle）
+ SQL ：结构化查询语言标志,通过SQL语句进行操作数据库的crud

​	数据库最基本的单元:**`数据表`**

### 表

​	数据库以表为单元存储数据:

​	**``	row``**:记录	

​	**`column`**:字段

```bash
+ **字段名**
+ **数据类型**
+ **约束**
```

## 起步

+ 账户:root
+ 密码：1234

### 启动

```bash
net start MySql
net stop MySql
```

### 登录

```bash
// mysql -h 主机名 -P 端口号 -u 用户名 -p 密码
mysql -u `username` -p `password`
```

### 退出

```mysql
exit
```

## 常用命令

### 查看数据库

```mysql
show databases;
```

![image-20240612025420511](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240612025420511.png)

### 查看版本号

```mysql
select version();
```



### 使用数据库

```mysql
use `database_name`;
```

![image-20240612025430235](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240612025430235.png)

### 查看当前数据库

```mysql
select database();
```



### 查看当前数据库状态

```mysql
status;
```



### 创建数据库

```mysql
create database `database_name`;
```

![image-20240612025543280](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240612025543280.png)

### 查看数据库下的表

```mysql
show tables;
```

### 导入数据表

```mysql
source  `path` 
```

### 查看表结构

```mysql
desc `table_name`
```

## SQL

### DQL

​	数据查询语言(SELECT)

​	用于查询记录

#### as

+ 使用**as**关键字起别名

  ```mysql
  select `` as `newNAME` from database;
  ```

  ![image-20240612041905066](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240612041905066.png)

#### 条件查询

+ SELECT  ...  FROM  ...  WHERE  ....  

#### 模糊查询(%   _)

+ SELECT  ...  FROM  ...  WHERE  .... LIKE  ''

#### 排序

默认为升序,使用关键字orderBy

+ ASC      升序
+ DESC    降序

#### 单行处理函数

#### 分组函数

#### 去除重复记录

+ distinct

  ```mysql
  select distinct '' from '';
  ```

  ![image-20240612085503153](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240612085503153.png)

#### 连接查询(多表查询)

如何连接表不做限制,将出现笛卡尔积现象(n*m),故需要限制条件为连接表两个字段相匹配

##### 内连接

完全能够匹配查询数据,关键字**`inner join`**

+ 等值连接

  条件为等值关系

```mysql
//92语法
select
emp.ename ,dept.dname,dept.loc 
from
emp ,dept 
where
emp.deptno=dept.deptno;
```

```mysql
//99语法,等值连接

//后续可继续添加where筛选语句
```

![image-20240612092038274](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240612092038274.png)

+ 非等值连接

  条件为非等值关系
  
  ```mysql
  SELECT
  	e.ENAME as '员工名',e.SAL AS '员工工资',s.GRADE AS '员工等级' 
  FROM
  	emp e
  JOIN
  	salgrade s
  ON
  	e.SAL BETWEEN s.LOSAL AND s.HISAL
  	
  ```
  
+ 自连接

  ```mysql
  SELECT
  	e.ENAME as '员工名',b.ENAME AS '老板名'
  FROM
  	emp e
  INNER JOIN
  	emp b
  ON
  	e.EMPNO = b.MGR 
  
  ```

结合案列

```mysql
SELECT
	e.ENAME as '员工名',e.SAL AS '员工工资',s.GRADE AS '员工等级' ,b.ENAME AS '老板名'
FROM
	emp e
JOIN
	salgrade s
ON
	e.SAL BETWEEN s.LOSAL AND s.HISAL
JOIN	
	emp b
ON
	e.EMPNO = b.MGR 
```



##### 外连接

+ 外连接查询结果条数>内连接

+ 关键字**`right join`**,右外连接的右边表为**主表**

```mysql
SELECT
	e.ENAME as '员工名',b.ENAME AS '老板名'
FROM
	emp e
RIGHT JOIN
	emp b
ON
	e.EMPNO = b.MGR 
```

+ 关键字**`left join`**,左外连接的左边表为**主表**

结合案列

```mysql
SELECT
	e.ENAME AS '员工名', d.DNAME AS '部门' ,e.SAL AS '员工工资',s.GRADE AS '员工等级',b.ENAME AS '上级领导'
FROM
	emp e
JOIN
	salgrade s
ON
	e.SAL BETWEEN s.LOSAL AND s.HISAL
JOIN
	dept d
ON 
	e.DEPTNO = d.DEPTNO
LEFT JOIN
	emp b
ON
e.MGR = b.EMPNO
```



#### 子查询

#### union

合并查询结果,效率高

#### limit

分页查询,排在order by后面

### DML

​	数据操作语言(INSERT      DELECT     UPDATE      )

​	用于修改记录,操作表数据

#### 

#### 插入记录

```mysql
// 完整写法,键值需要一一匹对
INSERT INTO 't_name'(key1,key2,key3...) VALUES(v1,v2,v3...);
```

#### 修改记录

```mysql
UPDATE 't_name' SET key=value WHERE '条件'
```

![image-20240612224626253](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240612224626253.png)

#### 删除记录

+ delete

```mysql
--支持回滚
DELETE FROM 't_name' where '条件'
```

![image-20240612224834592](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240612224834592.png)

### DDL

**data definition language**,数据定义语言(CREATE   DROP    ALTER)

​	用于修改字段,操作表结构

+ CREATE      新建字段
+ DROP          删除...
+ ALTER         修改...

#### 数据类型

+ varchar   可变长度,动态分配空间

+ char         定长

+ int

+ bigint

+ float

+ double

+ date              

  短日期(默认格式``'%Y-%M-%D'``)

  **注:**使用``str_to_date(str,`format`)``将字符串转化为日期格式

+ datetime       

  长日期(默认格式``  '%Y-%M-%D %H-%M-%S'``包含时分秒)

  **注:**使用``now()``获取当前系统时间的长日期格式

+ clog             字符大对象(超过255)

+ blog              二进制大对象,IO流

#### 创建表

```mysql
/*
	建议表名以 t_开头,
	字段名建议小写,多个单子用_连接
*/
CREATE TABLE `t_表名`(
    '字段名' 数据类型,
    ...,
	...
);
```

将查询的表创建

```mysql
CREATE table t_name AS (SELECT ...)
--例子
CREATE TABLE
	t_temp
AS
	SELECT
 e.ENAME, d.DNAME,d.LOC
FROM
	emp e
JOIN
	dept d
ON
	e.DEPTNO=d.DEPTNO
```



#### 删除表

+ DROP

```MYSQL
DROP TABLE [if EXISTS] 't_name' 
```
#### 删除表中全部记录

+ truncate(高效,不支持回滚)

```mysql
--不支持回滚
truncate Table 't_name'
```

#### 约束

**`constraint`**

+ 非空约束 			(not null)        只有列级约束

+ 唯一性约束         (unique)          均有

  表级约束,字段联合唯一     unique(key1,key2)  

  例子

  ```mysql
  CREATE TABLE t_vip(
  id INT,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  UNIQUE(name,email)
  );
  INSERT INTO
  	t_vip
  	(id,name,email)
  	VALUES
  	(1,'张三','123@qq.com'),
  	(1,'张三','123@sina.com')
  ```

+ 主键约束              (primary key)

  **主键值**:唯一标识,一个表允许有多个主键,但只能有一个主键约束(复合组件),varchar类型数据不建议作为主键

  + auto_increment

    给主键添加auto_increment,主键值从1开始自增

+ 外键约束             (foreign key)

  ```mysql
  foreign key(`key`) references p_table(key)
  ```

+ 检查约束             (check)   (oracle支持,mysql不支持)

### TCL

事务控制语言(COMMIT   ROLLBACK)

只有DML语句才与事务有关,多条DML语句同时完成或者失败

+ 事务开启

DML语句操作会记录到事务日志中

+ 回滚事务

撤销DML语句,清空日志文件

事务具有的特性:

+ 原子性                        最小工作单元

+ 一致性                        同时成功或失败

+ 隔离性                                

  + read uncommitted    读未提交             

    可以读到未提交的数据        (脏读数据)

  + read committed          读已提交   oracle默认级别

    只能读已提交的数据,但是不能重复读(可能读取的数据不统一,数据真实)

  + repeatable read           可重复读   mysql默认级别

    读取数据一致           (幻影,数据不够真实)

  + 序列化/串行化

    最高隔离级别,事务排队,不能并发,效率最低,级别最高

+ 持久性                         存储

#### 开启事务

mysql中,innoDB默认为自动提交事务

使用`start transaction`开启事务,并会关闭自动提交

```mysql
start transaction
```

使用**`commit`**进行提交

```mysql
commit
```

#### 回滚

```mysql
rollback
```

#### 查看事务隔离级别

```mysql
select @@transaction_isolation;
```

#### 设置全局隔离级别

```mysq
SET GLOBAL TRANSACTION ISOLATION LEVEL READ UNCOMMITTED；
```



### DCL

**DataControlLanguage**,数据控制语言(GRANK   REVOKE)

### DBA

数据的备份

#### 导出数据

+ dump(在windows 的 dos中)

  ```bash
  mysqldump `database_name` > `path`
  ```

  

#### 导入数据

+ source (在mysql中)

  ```mysql
  SOURCE `path`
  ```

  

## 存储引擎

### innoDB

## 索引

添加在字段上,提高检索效率

### 实现原理

+ mysql中,主键和unique会自动添加索引

+ 每张表的记录都有其物理存储编号(以物理编号查找)

+ 不同存储引擎 形式存在

  INnoDB中,存在tablespace中,以**`二叉树`**形式存在

### 创建索引

```mysql
--创建索引INDEX_NAME
CREATE INDEX `INDEX_NAME` ON `t_table`(key)
```

### 删除索引

```mysql
DROP INDEX `INDEX_NAME` ON `t_table` 
```

### 索引失效

+ 模糊查询时以**`%`**开头

```mysql
select * from `t_table` where name like '%value'
```

+ or
+ 复合索引,没有使用左侧的列索引
+ 索引字段加了运算
+ 索引字段使用函数

## 视图

**`view`**

操作视图会导致原表发生改变

### 创建视图对象(DQL查询出来的才能作为视图)

```mysql
CREATE VIEW `name_view` AS SELECT * FROM t_table
```

### 删除视图对象

```mysql
DROP VIEW `name_view`  
```

## 数据库设计三范式

### 第一范式

​	每一张范式必须有主键,每一个字段原子性不可再分

### 第二范式

​	要求所有非主键字段**完全依赖**主键,不产生**部分依赖**(使用复合组件会产生部分依赖)

​				设计**多对多**

​				三张表,关系表两外键

### 第三范式

要求所有非主键字段直接依赖主键,不产生传递依赖

​               设计**一对多**

​				两张表,多的表加外键
