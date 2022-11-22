import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database_connect';
import {
  Administrator,
  CIF,
  Faculty,
  Requests,
  Student,
} from './stuff/entities/Data';
const main = async () => {
  AppDataSource.initialize()
    .then(() => {
      console.log('ho gya connect? pausechamp');
    })
    .catch((error) => console.log(error));

  const app = express();
  const port = 8000;
  app.use(express.json());
  app.use(cors());
  app.post('/', async (req, res) => {
    res.send(req.body.name);
  });

  app.post('/cifs', async (_, res) => {
    const myData = await AppDataSource.getRepository(CIF).find();
    res.send(myData);
  });

  app.post('/requests', async (_, res) => {
    const myData = await AppDataSource.getRepository(Requests).find();
    res.send(myData);
  });

  app.post('/cifsbydepartment', async (req, res) => {
    const myData = await AppDataSource.getRepository(CIF).find();
    const finaldata: CIF[] = [];
    myData.map((data) => {
      if (data.department == req.body.department) finaldata.push(data);
    });
    res.send(finaldata);
  });

  app.post('/cifbyid', async (req, res) => {
    const myData = await AppDataSource.getRepository(CIF).find();
    myData.map((data) => {
      if (data.id == req.body.id) res.send(data);
    });
    res.send('cif not found');
  });

  app.post('/requestbyid', async (req, res) => {
    const myData = await AppDataSource.getRepository(Requests).find();
    myData.map((data) => {
      if (data.id == req.body.id) res.send(data);
    });
    res.send('request not found');
  });

  app.post('/getfac', async (req, res) => {
    const fac = await AppDataSource.getRepository(Faculty)
      .createQueryBuilder('faculty')
      .where('faculty.username = :username', { username: req.body.username })
      .getOne();

    res.send(fac);
  });

  app.post('/getstu', async (req, res) => {
    const stu = await AppDataSource.getRepository(Student)
      .createQueryBuilder('student')
      .where('student.username = :username', { username: req.body.username })
      .getOne();

    res.send(stu);
  });

  app.post('/getadm', async (req, res) => {
    const adm = await AppDataSource.getRepository(Administrator)
      .createQueryBuilder('admin')
      .where('admin.username = :username', { username: req.body.username })
      .getOne();

    res.send(adm);
  });

  app.post('/insertstudent', async (req, res) => {
    const stu = new Student();
    stu.name = req.body.name;
    stu.password = req.body.password;
    stu.branch = req.body.branch;
    stu.username = req.body.username;
    await AppDataSource.getRepository(Student).save(stu);
    res.sendStatus(200);
  });

  app.post('/insertfaculty', async (req, res) => {
    const fac = new Faculty();
    fac.name = req.body.name;
    fac.password = req.body.password;
    fac.cifs = req.body.cifs;
    fac.username = req.body.username;
    await AppDataSource.getRepository(Faculty).save(fac);
    res.sendStatus(200);
  });

  app.post('/insertcif', async (req, res) => {
    const cif = new CIF();
    cif.content = req.body.content;
    cif.course = req.body.course;
    cif.department = req.body.department;
    await AppDataSource.getRepository(CIF).save(cif);
    res.sendStatus(200);
  });

  app.post('/insertadm', async (req, res) => {
    const adm = new Administrator();
    adm.name = req.body.name;
    adm.password = req.body.password;
    adm.username = req.body.username;
    await AppDataSource.getRepository(Administrator).save(adm);
    res.sendStatus(200);
  });

  app.post('/insertrequest', async (req, res) => {
    const request = new Requests();
    request.course = req.body.course;
    request.department = req.body.department;
    request.faculty = req.body.faculty;
    request.isrequested = true;
    request.temp_cif = req.body.temp_cif;
    await AppDataSource.getRepository(Requests).save(request);
    res.sendStatus(200);
  });

  app.post('/updaterequest', async (req, res) => {
    await AppDataSource.createQueryBuilder()
      .update(Requests)
      .set({ isrequested: false })
      .where('id = :id', { id: req.body.id })
      .execute();
    res.sendStatus(200);
  });

  app.post('/deleterequest', async (req, res) => {
    await AppDataSource.createQueryBuilder()
      .delete()
      .from(Requests)
      .where('id = :id', { id: req.body.id })
      .execute();
    res.sendStatus(200);
  });

  app.post('/updatecif', async (req, res) => {
    await AppDataSource.createQueryBuilder()
      .update(CIF)
      .set({ content: req.body.content })
      .where('id = :id', { id: req.body.id })
      .execute();
    res.sendStatus(200);
  });

  app.post('/userexists', async (req, res) => {
    const user_type = req.body.usertype;
    let exists = false;
    let myData;
    if (user_type == 'Student')
      myData = await AppDataSource.getRepository(Student).find();

    if (user_type == 'Faculty')
      myData = await AppDataSource.getRepository(Faculty).find();

    if (user_type == 'Adm')
      myData = await AppDataSource.getRepository(Administrator).find();

    myData?.map((data) => {
      if (data.username == req.body.user) exists = true;
    });
    res.send(exists);
  });

  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
};
main().catch((err) => console.log(err));
