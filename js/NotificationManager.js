const actionListeners = {};

export function addListener(action, listener) {
  if (!actionListeners[action]) {
    actionListeners[action] = [];
  }

  actionListeners[action] = [...actionListeners[action], listener];
}

export function onNotificationClick(notification) {
  const listeners = actionListeners[notification.action];

  if (listeners) {
    listeners.forEach((listener) => {
      listener(notification);
    });
  }
}
