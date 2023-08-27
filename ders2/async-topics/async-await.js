console.log("begin");

function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username !== "murat") {
        reject("kullanici bulunamadi");
      }

      console.log("login yapiliyor");
      const token = `${username}123123123${password}`;
      resolve(token);
    }, 3000);
  });
}

function getRestaurants(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!token) {
        reject("kullanici yetkisi yok");
      }

      console.log("restoranlar getiriliyor");
      const restorants = ["dominos", "konyali", "burger"];

      resolve(restorants);
    }, 3000);
  });
}

function getMenu(restaurant) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (restaurant === "dominos") {
        resolve(["Margarita", "italiano"]);
      } else if (restaurant === "konyali") {
        resolve(["Adana", "Pide"]);
      } else {
        reject("menu bulunamadi");
      }
    }, 3000);
  });
}

async function menuyuAl() {
  try {
    const token = await login("mur", "1234");

    var nextToken = token + token;

    const restaurants = await getRestaurants(nextToken);

    restaurants.push("popaye");

    const menu = await getMenu(restaurants[1]);

    // ....

    console.log(menu);
  } catch (error) {
    console.log(error);
  }
}

menuyuAl();
