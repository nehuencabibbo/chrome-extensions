# Chrome Extension Pratice

Esto se va a usar para tomar notas. 

# Manifest

Todo se revuelve alrededor del manifest, viendo la docu y entrando a la parte que corresponde se puede ver como hacer todo. 

## Action 

El action deja controlar el iconito de la extension, ya sea que icono se ve o el html que se levanta cuando se clickea. 

## Options

Todas las extensiones pueden tener una pagina para settearles opciones, esto se settea del manifest.

## Estado 

Para compartir estado entre options y la extension como hacemos? Hay que usar el storage api, hay dos apis, una local (por tab), y otra sync, que syncea entre sessiones de browser. 

## Correr en el background

Si quiero hacer un timer, y en mi archivo de js de la extension yo le clavo un setInterval(), eso solo va a correr cuando el popup este abierto, esto deberia correr en el background. Para eso estan los service workers, que dejan correr codigo cuando la extension esta idle. 

![diagrama de estado del service worker](service-worker-state-diagram.png)

Estos service workers van a estar idle a veces, lo que puede traer problemas. 

Tambien, esto no es un archivo de javascirpt normal, `this` es `ServiceWorkerGlobalScope`.

Cada vez que se despierta el service worker el background.js se corre denuevo.

## Como hacer que corra el codigo con el servicio idle 

Para eso hay que usar ´Alarmas´. 