let dropboxV2Api = require("dropbox-v2-api");
let fs = require("fs");

const token =
  "sl.BWcMSC7F1hXGgaX75BSeu1ZBpm6E_dwj33wTuPJGtsJnmo_cI9ytZphjsCy6CzkqI4EfUKxUXWZWR4sxYRjvTm__OrMYAUU-Sj84og_6_PSUZQmIP6P7OVuvilZSaTdht35-9LI";

const dirName = "test";
const dirPath = "./" + dirName;
const fileName = "test.txt";
const filePath = dirPath + "/" + fileName;
let dropbox;

describe("dropbox requests", function () {
  beforeAll(function () {
    dropbox = dropboxV2Api.authenticate({
      token: token,
    });
  });

  describe("FilesManipulation", () => {
    it("create_folder", (done) => {
      dropbox(
        {
          resource: "test/create_folder",
          parameters: {
            path: dirPath,
          },
        },
        (
          err: any,
          result: {
            should: {
              have: { property: (arg0: string, arg1: string) => void };
            };
          }
        ) => {
          if (err) {
            throw err;
          }
          result.should.have.property("name", dirName);
          done();
        }
      );
    });
    it("get_metadata", (done) => {
      dropbox(
        {
          resource: "test/get_metadata",
          parameters: {
            path: dirPath,
            include_media_info: false,
            include_deleted: false,
            include_has_explicit_shared_members: false,
          },
        },
        (
          err: any,
          result: {
            should: {
              have: { property: (arg0: string, arg1: string) => void };
            };
          }
        ) => {
          if (err) {
            throw err;
          }
          result.should.have.property(".tag", "folder");
          result.should.have.property("path_lower", dirPath);

          done();
        }
      );
    });
    it("upload", (done) => {
      dropbox(
        {
          resource: "test/upload",
          parameters: {
            path: filePath,
          },
          readStream: fs.createReadStream(filePath),
        },
        (
          err: any,
          result: {
            should: {
              have: { property: (arg0: string, arg1: string) => void };
            };
          }
        ) => {
          if (err) {
            throw err;
          }
          result.should.have.property("path_lower", filePath);
          done();
        }
      );
    });
    it("delete", (done) => {
      dropbox(
        {
          resource: "test/delete",
          parameters: {
            path: filePath,
          },
        },
        (
          err: any,
          result: {
            should: {
              have: { property: (arg0: string, arg1: string) => void };
            };
          }
        ) => {
          if (err) {
            throw err;
          }
          result.should.have.property("path_lower", filePath);
          done();
        }
      );
    });
  });
});
