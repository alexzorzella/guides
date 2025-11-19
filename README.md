# Bootstrapping PostgreSQL On Your Windows Machine

### Part Zero: Documentation
PostgreSQL: https://www.postgresql.org/docs/current/index.html<br>
psycopg3: https://www.psycopg.org/psycopg3/docs/basic/index.html

### Part One: Download and Installation
Download the PostgreSQL installer from https://www.postgresql.org/download/<br>
Run the installer and install PostgreSQL Server and Command Line Tools (psql)

### Part Two: Setting Up the Database
Run PowerShell as admin<br>
Run `psql -U postgres`<br> to open the postgres shell
If that doesn't work, try `& "C:\Program Files\PostgreSQL\18\bin\psql.exe" -U postgres` (or restart your computer and try again)<br>
Run `CREATE DATABASE db_name;` to create a new database called `db_name`<br>
Run `\c db_name` to navigate to said database<br>
To import a SQL database, run `\i 'C:/Users/monalisa/Documents/Path/To/Database/File.db.sql'`

### Part Three: Testing the Database
Run `\dt` to query all the tables in your database
Run SQL commands to query your database from the postgres shell

### Part Four: Giving Your Account Permissions
Run `CREATE USER username WITH PASSWORD 'password';` where `username` matches your system username. Check `C:/Users` to view the users. Your account will be listed there.<br>
Run `ALTER USER username WITH SUPERUSER;` to give the newly created account `SUPERUSER` status<br>
Restart postgres or restart your computer<br>
To update your password, run `ALTER USER username WITH PASSWORD 'new_password';`<br>
To explicitly grant connection access, run `GRANT CONNECT ON DATABASE db_name TO username;`

### Part Five: Python Integration
install `psycopg` and `import psycopg` into your python project<br>
Run the program. If psycopg isn't finding PostgreSQL, try<br>
1. Press Win + R<br>
2. Type `sysdm.cpl` and hit OK<br>
3. Navigate to `Advanced > Environment Variables`<br>
4. Navigate to `System Variables > Path > Edit > New > Add`, and paste `C:\Program Files\PostgreSQL\18\bin`. If you're using a different version of PostgreSQL, make sure that the path is accurate, i.e. a user using PostgreSQL 17 will paste `C:\Program Files\PostgreSQL\17\bin`. If you installed PostgreSQL in a different location other than `C:\Program Files`, use that path instead<br>
5. Restart postgres or restart your computer

### Part 6: Retrieving Dumps and Logs
Open `postgresql.conf`<br>
Uncomment and update the following line: `log_statement = 'all'`. This will make postgres log all queries, including ones from external connections.<br>
Run Powershell as admin <br>
Run `cd "C:/Users/monalisa/Documents/Path/To/Dump/Location"` to navigate to the location you desire to save the `.dump` files<br>
Run `pg_dump -U postgres -d db_name --params > filename.dump` to save a `.dump` file with the specifications outlined by `--params`<br>
You can find the `pg_dump` documentation here: https://www.postgresql.org/docs/current/app-pgdump.html<br>
Find the log file using `SELECT pg_current_logfile();` when in the postgres shell<br>
To easily find files in your system, download Everything (the program named 'Everything', not everything by Voidtools) by Voidtools here: https://www.voidtools.com/downloads/
