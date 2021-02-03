const eventBus = new EventBus();
eventBus.on('xxx', cb);
eventBus.emit('xxx');

class EventBus{
     listener = []
}
