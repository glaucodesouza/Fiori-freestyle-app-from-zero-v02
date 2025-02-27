# Fiori-freestyle-app-from-zero-v02
Fiori freestyle App from zero  
OData  
CRUDQ  
Worklist  
Object Page  

## Prerequisites
I've already have an OData service with CRUDQ with methods, using SEGW in SAP S/4.  
Using Live Server (VS Code extension) for local testing (index.html)

## Step-by-step
## PART 1: Basic App (no OData)
- [ ]  Criar pasta raiz  
- [ ]  Criar pasta webapp  
- [ ]  Criar webapp\index.html  
- [ ]  Criar webapp\index.js  
- [ ]  Criar webapp/view/App.view.xml  
- [ ]  Adaptar index.js para chamar sua nova view App  
- [ ]  Instalar um Web Server Local no VS Code  
- [ ]  Criar o Controller  
    redefinir meu Controller (Ampliar)  
    return meuController.extend();  
    
- [ ]  Criar o Component.js  
- [ ]  Criar o manifest.json  

**Finalizing part 1**  
No final, mexemos no index.html, retirando a chamada do index.js.  
Assim, não precisamos mais do index.js.  
Pois será chamado o Component.js a partir de agora.  
O Component.js, a partir de agora, chamará o manifest.  
O Manifest chamará a View App a partir de agora.  

## PART 2: How to Add OData, Routing and Testing directory?

- [ ]  write your OData in manifest source  
- [ ]  write your routes in manifest routes  
- [ ]  npm start  
- [ ]  npm install  
- [ ]  **IMPORTANT:**  
    - Create ui5 local files manually (Because it is easier than using ui5 scripts)  
    - (manually, copy and adapt from another FIORI project)  
    - [ ]  Create **ui5.yaml**  
    - [ ]  Create **ui5-local.yaml**  
    - [ ]  Create **ui5-deploy.yaml**  
    - [ ]  Copy **localService** folder from other FIORI project and adapt ID application  
    - [ ]  Copy **test folder** from other FIORI project and adapt ID application  
    - [ ]  Copy **model** folder from other FIORI project and adapt ID application  
    - [ ]  Copy **i18n** folder from other FIORI project and adapt ID application  