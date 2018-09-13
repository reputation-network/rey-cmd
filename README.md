# REY CLI Commands
> :warning: **WARNING:** This project is still in alpha, so the interface might change in the near future

Set of command tools for REY app developers

## Usage

```
$ docker build -t rey-cmd .
$ docker run -it --net=host rey-cmd ls # prints a list of all the availabe commands
$ docker run -it --net=host rey-cmd read-app # prints the help for the command
```
> There is also an already built image available at dockerhub `reputationetwork/cmd`

## LICENSE
MIT © 2018 [Reputation Network](./LICENSE)
