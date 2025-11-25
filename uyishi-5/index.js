const http = require("http");
const { read_file, write_file } = require("./file-manager/file-manager");

const uuid = require("uuid");

const options = {
  "content-type": "application/json",
  "access-Control-Allow-Origin": "*",
};

const app = http.createServer((req, res) => {
  const reqid = req.url.split("/")[req.url.split("/").length - 1];

  // GET
  if (req.method === "GET" && req.url === "/get_fruits") {
    try {
      const fileData = read_file("fruits.json");

      res.writeHead(200, options);
      return res.end(JSON.stringify(fileData));
    } catch (error) {
      res.writeHead(500, options);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // GETone
  if (req.method === "GET" && req.url === `/get_one_fruits/${reqid}`) {
    try {
      const fileData = read_file("fruits.json");

      const foundedProduct = fileData.find((product) => product.id === reqid);
      if (!foundedProduct) {
        res.writeHead(404, options);
        return res.end(
          JSON.stringify({
            massage: "fruits not found",
          })
        );
      }

      res.writeHead(200, options);
      res.end(JSON.stringify(foundedProduct));
    } catch (error) {
      res.writeHead(500, options);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // POST
  if (req.method === "POST" && req.url === "/add_fruits") {
    try {
      req.on("data", (a) => {
        const data = JSON.parse(a);
        const { title, price, desc } = data;

        const fileData = read_file("fruits.json");

        fileData.push({
          id: uuid.v4(),
          title,
          price,
          desc,
        });

        write_file("fruits.json", fileData);
        res.writeHead(201, options);

        res.end(
          JSON.stringify({
            message: "Added new product",
          })
        );
      });
    } catch (error) {
      res.writeHead(500, options);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // PUT

  if (req.method === "PUT" && req.url === `/update_product/${reqid}`) {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const { title, price, desc } = data;

      const fileData = read_file("fruits.json");

      const foundedProduct = fileData.find((item) => item.id === reqid);

      if (!foundedProduct) {
        res.writeHead(404, options);
        return res.end(
          JSON.stringify({
            messege: "fruit not found",
          })
        );
      }

      fileData.forEach((item) => {
        if (item.id === reqid) {
          item.title = title ? title : item.title;
          item.price = price ? price : item.price;
          item.desc = desc ? desc : item.desc;
        }
      });

      write_file("fruits.json", fileData);
      res.writeHead(200, options);
      res.end(
        JSON.stringify({
          messege: "Uppdated fruits",
        })
      );
    });
  }
  // DELET

  if (req.method === "DELETE" && req.url === "/delete_fruits/" + reqid) {
    const fileData = read_file("fruits.json");

    const foundedProduct = fileData.find((a) => a.id === reqid);
    if (!foundedProduct) {
      res.writeHead(404, options);
      return res.end(
        JSON.stringify({
          messege: "fruits not found",
        })
      );
    }

    fileData.forEach((b, index) => {
      if (b.id === reqid) {
        fileData.splice(index, 1);
      }
    });

    write_file("fruits.json", fileData);
    res.writeHead(200, options);
    res.end(
      JSON.stringify({
        messege: "Deleted Product",
      })
    );
  }
});

app.listen(3003, () => {
  console.log("server is ranning");
});
