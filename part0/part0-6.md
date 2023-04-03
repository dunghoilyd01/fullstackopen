```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of server: a new note is sent to server to process and save
    server-->>browser: Server sent a response to tell browser a new note was created
    Note right of browser: Code is executed after the response from server to display a new note

```
