import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material';

interface BusinessSpecification {
  name: string;
  description: string;
  businessType: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecification>({
    defaultValues: {
      name: '',
      description: '',
      businessType: ''
    }
  });

  useEffect(() => {
    if (errors) {
      console.error(errors);
    }
  }, [errors]);

  const onSubmit = async (data: BusinessSpecification) => {
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name ? 'This is a required field' : ''}
            aria-label="business-name"
            inputProps={{ 'aria-invalid': errors.name?.type === 'required'}}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{ maxLength: 250 }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={!!errors.description}
            helperText={errors.description ? `Max length is 250 characters, you have ${field.value.length} characters.` : ''}
            aria-label="business-description"
            inputProps={{ 'aria-invalid': errors.description?.type === 'maxLength'}}
          />
        )}
      />

      <InputLabel id="demo-simple-select-label" htmlFor="business-type">Business Type</InputLabel>
      <Controller
        name="businessType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            labelId="demo-simple-select-label"
            id="business-type"
            fullWidth
            margin="normal"
            error={!!errors.businessType}
            aria-label="business-type"
            inputProps={{ 'aria-invalid': errors.businessType?.type === 'required'}}
          >
            <MenuItem value="" disabled>
              Please select a business type
            </MenuItem>
            <MenuItem value="saas">SaaS</MenuItem>
            {/* Add more options as needed */}
          </Select>
        )}
      />

      {error && (
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      )}

      <Box mt={2}>
        <Button
          type="submit"
          fullWidth
          disabled={loading}
          variant="contained"
          aria-label="create-business-specification"
        >
          {loading ? (
            <>
              Creating Business Specification{' '}
              <CircularProgress size={16} className={clsx({ 'ml-2': true })} />
            </>
          ) : (
            'Create'
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material';

interface BusinessSpecification {
  name: string;
  description: string;
  businessType: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecification>({
    defaultValues: {
      name: '',
      description: '',
      businessType: ''
    }
  });

  useEffect(() => {
    if (errors) {
      console.error(errors);
    }
  }, [errors]);

  const onSubmit = async (data: BusinessSpecification) => {
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name ? 'This is a required field' : ''}
            aria-label="business-name"
            inputProps={{ 'aria-invalid': errors.name?.type === 'required'}}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{ maxLength: 250 }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={!!errors.description}
            helperText={errors.description ? `Max length is 250 characters, you have ${field.value.length} characters.` : ''}
            aria-label="business-description"
            inputProps={{ 'aria-invalid': errors.description?.type === 'maxLength'}}
          />
        )}
      />

      <InputLabel id="demo-simple-select-label" htmlFor="business-type">Business Type</InputLabel>
      <Controller
        name="businessType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            labelId="demo-simple-select-label"
            id="business-type"
            fullWidth
            margin="normal"
            error={!!errors.businessType}
            aria-label="business-type"
            inputProps={{ 'aria-invalid': errors.businessType?.type === 'required'}}
          >
            <MenuItem value="" disabled>
              Please select a business type
            </MenuItem>
            <MenuItem value="saas">SaaS</MenuItem>
            {/* Add more options as needed */}
          </Select>
        )}
      />

      {error && (
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      )}

      <Box mt={2}>
        <Button
          type="submit"
          fullWidth
          disabled={loading}
          variant="contained"
          aria-label="create-business-specification"
        >
          {loading ? (
            <>
              Creating Business Specification{' '}
              <CircularProgress size={16} className={clsx({ 'ml-2': true })} />
            </>
          ) : (
            'Create'
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateBusinessSpecification;