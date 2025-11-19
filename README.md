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

# Git Guide

### Basics

Pull: ``git pull``

Check status: ``git status``<br>

Add changes: ``git add .``<br>
Add changes (specific): ``git add file_path``<br>

Commit: ``git commit -m "Message"``<br>

Push: ``git push``

### Branching

Checkout to a new branch: ``git checkout -b yourname/new_branch_name``<br>
Checkout to an existing branch: ``git checkout yourname/branch_name``<br>

Check your current branch: ``git branch -a``<br>

Delete a branch: ``git branch -d branch_name``<br>
Force delete a branch (caution): ``git branch -D branch_name``<br>

After a pull request to main:<br>
``git checkout main``<br>
``git pull --prune``<br>
``git checkout yourname/new_branch_name``<br>
``git push --set-upstream origin new_branch_name``

### Rebasing
When rebasing, git essentially asks "What would have happened if everything that had happened during ``name_of_branch_to_rebase_onto`` had happened before whatever had happened before ``yourname/working_branch``?" Because the past may have changes to code or assets that the present also interacts with, there may be conflicts. These are resolved during the rebase. Remember: you can always abort a rebase by using ``git rebase --abort``<br>
``git checkout yourname/working_branch``<br>
``git fetch origin``<br>
``git rebase name_of_branch_to_rebase_onto``<br>
``git pull --rebase``

### Extras
Pretty log: ``git log --all --decorate --oneline --graph``

### Etiquette

Naming your branches in a standard manner is convenient for the team.<br>
Please name your branch your_name_short/branch_name:<br>
``ldavinci/wing_refactor``<br>
``monal/security_patch``<br>
``alexz/squirrel_gui``<br>
Branch names should be easy to read and easy to type. While naming a branch ``alexz/gar`` is fun, it also doesn't convey what that branch is responsible for. Unless there's an understanding that ``gar`` is a version with certain features, a better branch name would be ``alexz/catalogue_integration``.

#### Why append your name to every branch you create?

First of all, appending your name to a branch isn't a declaration that nobody else can work on it. It is, however, difficult to simultaneously work on the same branch. Branches are really convenient because they provide the opportunity to work without worry of overlap. If two people want to work on the same code in the same files, the work probably hasn't been divided correctly. Pair programming can be done with one person typing and the other sitting next to the first making comments with both switching positions every once in a while. There are also programs that allow multiple to work on the same file at once. If multiple people want to work on the exact same code, try and avoid merge conflicts as much as possible by doing one of the aforementioned things.<br>
Naming a branch this way gives two important pieces of information: who should be contated about the code in that branch and what purpose it serves.<br>
`alexz` tells someone checking into that branch that Alex Zorzella wrote that code, but doesn't offer any other information.<br>
`squirrel_gui` tells someone checking into that branch that there's going to be Squirrel GUI code in that branch, but they'll have to read the commit history to find the person to contact. Yes, someone looking at a branch can always check the commit history for the author, but naming the branch well will lead to good info when someone calls `git branch -a`.<br>
`alexz/squirrel_gui` tells someone checking into that branch a lot of good information: both what is being worked on and who's working on it.<br><br>
```
ameliaq@wpeb-436-14:~/Documents/GitHub/Capstone $ git branch -a
monal/squirrel_gui
ldavinci/flying_machine
kathyj/propellant_driver *
remotes/origin/HEAD -> origin/main
remotes/origin/main
remotes/origin/mlisa/squirrel_gui
remotes/origin/ldavinci/flying_machine
remotes/origin/kathyj/propellant_driver
```

#### Setting Up SSH

Check if you already have an SSH key with<br>
`ls -al ~/.ssh`<br>

If you don't, create a new key using<br>
`ssh-keygen -t ed25519 -C ameliaq@email.com`<br>

Start the SSH agent using<br>
`eval "$(ssh-agent -s)"`<br>

Add your new key using<br>
`ssh-add ~/.ssh/id_ed25519`<br>

Copy your new key with<br>
`pbcopy < ~/.ssh/id_ed25519.pub`<br>
or by copying the output of<br>
`cat ~/.ssh/id_ed25519.pub`<br>
and pasting it into GitHub<br>

Test your new SSH key with<br>
`ssh -T git@github.com`<br>

Fix complaints using<br>
`chmod 700 ~/.ssh`<br>
`chmod 600 ~/.ssh/id_ed25519`<br>
`chmod 644 ~/.ssh/id_ed25519.pub`
