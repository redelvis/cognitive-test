function GetCurrentUser() {
  return new Promise((resolve, reject) => {
    api.getCurrentUser((err, data) => {
      if (err !== null) reject(err);
      resolve(data);
    });
  });
}

function getOrganization() {
  return new Promise((resolve, reject) => {
    api.getOrganizationInfo((id, err, data) => {
      //do we need an id here?
      if (err !== null) reject(err);
      resolve(data);
    });
  });
}

function getOrders() {
  return new Promise((resolve, reject) => {
    api.getOrders((err, data) => {
      //do we need an id here?
      if (err !== null) reject(err);
      resolve(data);
    });
  });
}

function createUser() {
  return new Promise((resolve, reject) => {
    api.createUser(responce => {
      //do we need an id here?
      if (responce.status === 400) reject(responce);
      else if (responce.status === 201) resolve(data);
    });
  });
}


//// todo: add promises chain
