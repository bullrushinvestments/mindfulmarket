import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { CircularProgress, TextField, Button, Typography, Box, Container } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  contentTypes: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [contentTypes, setContentTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const newBusinessSpec: BusinessSpec = {
        id: Date.now().toString(),
        name: businessName,
        description,
        contentTypes,
      };

      await axios.post('/api/business-specs', newBusinessSpec);
      // Handle success, e.g., reset form or redirect
    } catch (err) {
      setError('Failed to create the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography component="h1" variant="h5">
          Create Business Specification
        </Typography>
        {error && (
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography color="error">{error}</Typography>
          </Box>
        )}
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="businessName"
            label="Business Name"
            name="businessName"
            autoComplete="business-name"
            autoFocus
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Content Types</Typography>
            {contentTypes.map((contentType, index) => (
              <TextField
                key={index}
                variant="outlined"
                margin="normal"
                fullWidth
                id={`contentType-${index}`}
                label={`Content Type ${index + 1}`}
                name={`contentType-${index}`}
                autoComplete={`contentType-${index}`}
                value={contentType}
                onChange={(e) => {
                  const newTypes = [...contentTypes];
                  newTypes[index] = e.target.value;
                  setContentTypes(newTypes);
                }}
              />
            ))}
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
            aria-label="Create Business Specification"
          >
            {loading ? <CircularProgress size={24} /> : 'Create'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { CircularProgress, TextField, Button, Typography, Box, Container } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  contentTypes: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [contentTypes, setContentTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const newBusinessSpec: BusinessSpec = {
        id: Date.now().toString(),
        name: businessName,
        description,
        contentTypes,
      };

      await axios.post('/api/business-specs', newBusinessSpec);
      // Handle success, e.g., reset form or redirect
    } catch (err) {
      setError('Failed to create the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography component="h1" variant="h5">
          Create Business Specification
        </Typography>
        {error && (
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography color="error">{error}</Typography>
          </Box>
        )}
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="businessName"
            label="Business Name"
            name="businessName"
            autoComplete="business-name"
            autoFocus
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Content Types</Typography>
            {contentTypes.map((contentType, index) => (
              <TextField
                key={index}
                variant="outlined"
                margin="normal"
                fullWidth
                id={`contentType-${index}`}
                label={`Content Type ${index + 1}`}
                name={`contentType-${index}`}
                autoComplete={`contentType-${index}`}
                value={contentType}
                onChange={(e) => {
                  const newTypes = [...contentTypes];
                  newTypes[index] = e.target.value;
                  setContentTypes(newTypes);
                }}
              />
            ))}
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
            aria-label="Create Business Specification"
          >
            {loading ? <CircularProgress size={24} /> : 'Create'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreateBusinessSpecification;