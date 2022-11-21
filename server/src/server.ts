import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database_connect';
import { CIF, Faculty } from './stuff/entities/Data';
const main = async () => {
  AppDataSource.initialize()
    .then(() => {
      console.log('ho gya connect? pausechamp');
    })
    .catch((error) => console.log(error));

  const app = express();
  const port = 3000;
  app.use(express.json());
  app.use(cors());
  app.post('/', async (req, res) => {
    res.send(req.body.name);
  });
  app.get('/cifs', async (_, res) => {
    const myData = await AppDataSource.getRepository(CIF).find();
    res.send(myData);
  });
  app.get('/cifsbydepartment', async (req, res) => {
    const myData = await AppDataSource.getRepository(CIF).find();
    const finaldata: CIF[] = [];
    myData.map((data) => {
      if (data.department == req.body.department) finaldata.push(data);
    });
    res.send(finaldata);
  });

  app.get('/experiment', async (req, res) => {
    const faculties = await AppDataSource.getRepository(Faculty).find({
      relations: {
        bridge: true,
      },
    });
    res.send(faculties);
    // let thisfac : Faculty;
    // faculties.map((data) => {
    //     if(data.name == "fac")
    //       thisfac = data;
    // });
  });
  app.get('/cifsbycourselist', async (req, res) => {
    const myData = await AppDataSource.getRepository(CIF).find();

    const finaldata: CIF[] = [];
    myData.map((data) => {
      let len = req.body.course?.length || 0;
      for (let i = 0; i < len; i++)
        if (data.course == req.body.course[i]) {
          finaldata.push(data);
          break;
        }
    });
    res.send(finaldata);
  });
  app.get('/cifsbyfaculty', async (req, res) => {
    const myData = await AppDataSource.getRepository(Faculty).find();

    myData.map((data) => {
      if (data.username == req.body.user) res.send(data);
    });
  });
  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
};
main().catch((err) => console.log(err));
