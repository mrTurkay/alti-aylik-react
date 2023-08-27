console.log("begin");

// once login olcak
// restorantlari getir
// restorant menusu

function login(username, password, callback) {
  setTimeout(() => {
    if (username !== "murat") {
      console.log("kullanici bulunamadi");
      return;
    }

    console.log("login yapiliyor");
    const token = `${username}123123123${password}`;
    callback(token);
  }, 3000);
}

function getRestaurants(token, callback) {
  if (!token) {
    console.log("hata, token yok");
    return;
  }

  setTimeout(() => {
    console.log("restoranlar getiriliyor");
    const restorants = ["dominos", "konyali", "burger"];
    callback(restorants);
  }, 3000);
}

function getMenu(restaurant, callback) {
  setTimeout(() => {
    if (restaurant === "dominos") callback(["Margarita", "italiano"]);
    else if (restaurant === "konyali") callback(["Adana", "Pide"]);
    else {
      console.log("menu bulunamadi");
      return;
    }
  }, 3000);
}

login("murat", "1234", (token) => {
  getRestaurants(token, restaurantsCallback);
});

const restaurantsCallback = (restaurants) => {
  console.log(restaurants);
  getMenu(restaurants[0], callbackMenu);
};

const callbackMenu = (menu) => {
  console.log(menu);
};
