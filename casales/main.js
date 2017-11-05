const Subject = require('./Subject.js').Subject;
const Observer = require('./Observer.js').Observer;

const concreteSubject = new Subject();

const concreteObserverOne = new Observer('One');
const concreteObserverTwo = new Observer('Two');

concreteSubject.addObserver(concreteObserverOne);
concreteSubject.addObserver(concreteObserverTwo);

concreteSubject.notify('Salute My Observers!');
