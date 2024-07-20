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

**Finalização**  
No final, mexemos no index.html, retirando a chamada do index.js.  
Assim, não precisamos mais do index.js.  
Pois será chamado o Component.js a partir de agora.  
O Component.js, a partir de agora, chamará o manifest.  
O Manifest chamará a View App a partir de agora.  