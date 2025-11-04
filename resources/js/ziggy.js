const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"auto.show":{"uri":"auto\/{brand}\/{model}\/{autoid}","methods":["GET","HEAD"],"parameters":["brand","model","autoid"]},"contact.index":{"uri":"contacto","methods":["GET","HEAD"]},"contact.send":{"uri":"contacto","methods":["POST"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
