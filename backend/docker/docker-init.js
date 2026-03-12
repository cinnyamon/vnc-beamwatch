import Dockerode from "dockerode";

const dockerInit = async (contName) => {
  const docker = new Dockerode({
    socketPath: "/var/run/docker.sock",
    protocol: "http",
    port: 5800,
    version: "v1.53",
  });

  docker.listImages((err, cont) => {
    if (err) console.error(err);
    console.log(cont);
    cont.forEach((contInfo) => {
      const beamfox = contInfo.RepoTags.filter((str) => str === "beamfox");

      if (!beamfox) return;

      console.log(beamfox);
    });
  });

  // const container = docker.getContainer(contName);

  // container.inspect((err, data) => {
  //   if (err) console.error(err);
  //   console.log("container data befor init", data);
  // });
};

export default dockerInit;
