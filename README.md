# My Favorite Git Commands

### Committing

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

### Pretty Log
Pretty log: ``git log --all --decorate --oneline --graph``

### Setting Up SSH (MacOS/Linux)

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
and paste it into GitHub's [Add new SSH Key box](https://github.com/settings/ssh/new)<br>

Test your new SSH key with<br>
`ssh -T git@github.com`<br>

Fix complaints using<br>
`chmod 700 ~/.ssh`<br>
`chmod 600 ~/.ssh/id_ed25519`<br>
`chmod 644 ~/.ssh/id_ed25519.pub`

### Settings Up SSH (Windows)

Check if you already have an SSH key with<br>
`ls ~/.ssh`<br>

If you don't, create a new key using<br>
`ssh-keygen.exe -t ed25519 -C ameliaq@email.com`<br>

Start the SSH agent using<br>
`Start-Service ssh-agent`<br>

Add your new key using<br>
`ssh-add.exe C:\Users\ameliaq@gmail.com\.ssh\id_ed25519`<br>

and by copying the output of<br>
`cat C:\Users\ameliaq@gmail.com\.ssh\id_ed25519.pub`<br>
and paste it into GitHub's [Add new SSH Key box](https://github.com/settings/ssh/new)<br>

Test your new SSH key with<br>
`ssh -T git@github.com`<br>

Note for setting up SSH in Windows: it may be necessary to enable the OpenSSH Authentication Agent in `services.msc`. Access it with `Win + R`.<br>

### Rebasing a Downstream Repo's main Onto Its Upstream's main

First, make sure that both the upstream and the downstream are clean<br>
Checkout to `main` using `git checkout main`<br>
Fetch the upstream's content `git fetch upstream`<br>
Merge with the upstream's content `git merge upstream/main`<br>
Settle any merge conflicts, if applicable<br>
All branches will be behind `main`, so for each branch, `git checkout branch_name`, then `git rebase main`<br>
Settle any merge conflicts, if applicable<br>
Every branch you rebase onto `main` will now have content that the origin doesn't know about. Running `git push` will result in an error, so you must either force push using `git push -f` (be very careful with this command) or create a new branch and delete the old one.

### Delete From Git Without Deleting Locally

This is useful after updating the .gitignore.<br>
Remove a file using `git rm --cached path/to/file`<br>
Remove a directory recursively using `git rm --cached -r path/to/directory`

### Etiquette

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

# Homebrew
[Homebrew](https://brew.sh/) lets you easily install packages into your Mac.<br>
Run `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` to install Homebrew.<br>
Install Homebrew packages with `brew install packagename`.

# Python

Properly set up your [pyproject.toml](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/) to make your life eaiser.

## Astral UV

[Astral UV](https://docs.astral.sh/uv/) simplifies the creation, use, and maintenence of virutal environments.<br>

Install it using `curl -LsSf https://astral.sh/uv/install.sh | sh`<br>
Install a specific Python verison using `uv python install x.yz`<br>
Initialize a Python project using uv with `uv init`. Use `--python x.yz` to specify a Python version.<br>
Add a virtual environment to an existing project using uv with `uv venv`. Use `--python x.yz` to specify a Python version.<br>
Activate the environment using `source ./.venv/bin/activate`<br>
Use `uv add packagename` to install Python packages. If your `pyproject.toml` is set up correctly, then you can just use `uv sync` to install all dependencies.<br>
Run Python files with `uv run filename.py`

# Bootstrapping PostgreSQL On Your Windows Machine

### Part Zero: Documentation
[PostgreSQL](https://www.postgresql.org/docs/current/index.html)<br>
[psycopg3](https://www.psycopg.org/psycopg3/docs/basic/index.html)

### Part One: Download and Installation
Download the [PostgreSQL installer](https://www.postgresql.org/download/)<br>
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
You can find the `pg_dump` documentation [here](https://www.postgresql.org/docs/current/app-pgdump.html)<br>
Find the log file using `SELECT pg_current_logfile();` when in the postgres shell<br>
To easily find files in your system, download Everything (the program named 'Everything', not everything by Voidtools) by Voidtools (here)[https://www.voidtools.com/downloads/]
