# Docker How To
## Voraussetzungen
Ihr müsst Docker für euer System installiert und gestartet haben.
Anleitung gibt es hier: [Install](https://docs.docker.com/engine/install/)
Die Dockerfiles sind für VS Code ausgelegt, daher solltet ihr dort die Extension Remote-Containers(ms-vscode-remote.remote-containers) installieren.

## Start der Dev-Umgebung
Nachdem alles installiert ist, erscheint in VS Code unten links ein grüner Button. Diesen anklicken und im oben erscheinenden Menü den Punkt Remote-Containers: Open Folder in Container... auswählen. Dann den Ordner Go aus diesem Repo wählen. Alles andere passiert dann.
Es werden im Container folgende Extensions installiert: 
- ms-vsliveshare.vsliveshare
- hbenl.vscode-test-explorer-liveshare
- hbenl.vscode-test-explorer
- golang.go

Zusätzlich alles, was bisher für das Starten von dieser Go App notwendig ist. 