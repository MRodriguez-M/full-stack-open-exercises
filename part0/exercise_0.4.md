```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of browser: Request made after user adds clicks Save button
    server-->>browser: HTML document
    deactivate server


```