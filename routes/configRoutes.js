const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const { isValidFileNameMiddleware, isValidPostFileNameMiddleware } = require('../lib/utils');

const assignIdAndPrepareStorageLocation = () => {
  const returnObject = {};
  while (!returnObject.filePath) {
    returnObject.id = uuid.v4();
    const filePath = `../configs/stored/${returnObject.id}/`;
    try {
      fs.statSync(path.join(__dirname, filePath));
    } catch (err) {
      if (err && err.code === 'ENOENT') {
        // Directory doesn't exist, create it
        returnObject.filePath = filePath;
        fs.mkdirSync(path.join(__dirname, filePath));
      }
    }
  }

  return returnObject;
};

// Define your routes using the router object
router.post('/', isValidPostFileNameMiddleware, (req, res) => {
  // Implementation for create route
  const { data, name } = req.body;

  if (!name || !data) {
    return res.status(400).json({ message: 'Name and data are required.' });
  }

  // TODO: Use MongoDB in the future for Persistent Storage instead of File System.

  const storageLocationObject = assignIdAndPrepareStorageLocation();
  const configPath = path.join(__dirname, `../configs/stored/${storageLocationObject.id}/`, `${name}.json`);

  data.id = storageLocationObject.id;
  fs.writeFile(configPath, JSON.stringify(data), err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error creating configuration.' });
    }

    // RETURN CONFIG WITH ID ASSIGNED

    // TODO: Save UUID to database associated to user credentials
    res.status(201).json(data);
  });
});

router.put('/:id', isValidFileNameMiddleware, (req, res) => {
  // Implementation for update route
  const { id } = req.params;
  const { name, data } = req.body;

  // Redundant but necessary to ensure user does not manually update id
  delete data.id;
  data.id = id;

  if (!name || !data) {
    return res.status(400).json({ message: 'Name and data are required.' });
  }

  const configPath = path.join(__dirname, `../configs/stored/${id}/`, `${name}.json`);

  // TODO: Use Mongo DB in the future Persistent Storage instead of File System.
  fs.writeFile(configPath, JSON.stringify(data), err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error updating configuration.' });
    }

    return res.json({ message: 'Configuration updated successfully.' });
  });
});

router.delete('/:id/:name', isValidFileNameMiddleware, (req, res) => {
  // Implementation for delete route
  const { id, name } = req.params;

  if (!name) {
    return res.status(400).json({ message: 'Name is required.' });
  }

  const configPath = path.join(__dirname, `../configs/stored/${id}`, `${name}.json`);

  // TODO: Use Mongo DB in the future Persistent Storage instead of File System.
  fs.unlink(configPath, err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error deleting configuration.' });
    }

    res.json({ message: 'Configuration deleted successfully.' });
  });
});

router.get('/:id/:name', isValidFileNameMiddleware, (req, res) => {
  // Implementation for get route
  const { id, name } = req.params;

  if (!name) {
    return res.status(400).json({ message: 'Name is required.' });
  }

  const configPath = path.join(__dirname, `../configs/stored/${id}`, `${name}.json`);

  // TODO: Use Mongo DB in the future Persistent Storage instead of File System.
  fs.readFile(configPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error fetching configuration.' });
    }

    const config = JSON.parse(data);
    return res.json(config);
  });
});

module.exports = router;
