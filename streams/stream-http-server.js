import http from "node:http";
import { Transform } from "node:stream";

class InverseNumberStream extends Transform {
  _transform(chunck, encoding, callback) {
    const transformed = Number(chunck.toString()) * -1;

    console.log(transformed);
    callback(null, Buffer.from(String(transformed)));
  }
}

const server = http.createServer(async (req, res) => {
  const buffers = [];

  for await (const chuck of req) {
    buffers.push(chuck);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  console.log(fullStreamContent);

  // return req.pipe(new InverseNumberStream()).pipe(res);

  return res.end(fullStreamContent);
});

server.listen(3334);
