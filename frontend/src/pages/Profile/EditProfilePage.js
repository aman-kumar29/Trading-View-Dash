import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import classes from './editProfilePage.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ChangePassword from '../../components/ChangePassword/ChangePassword';

export default function EditProfilePage() {
  const { user, updateProfile } = useAuth(); // Assuming updateUser function updates user details

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      address: user.address,
    },
  });

  const submit = (userData) => {
    updateProfile(userData);
    // Redirect or show success message, etc.
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        {/* <Title title="Edit Profile" /> */}

        <form onSubmit={handleSubmit(submit)}>
          <div className={classes.formSection}>
            <div className={classes.formLabel}>Name:</div>
            <Input
              type="text"
              {...register('name', {
                required: true,
                minLength: 5,
              })}
              className={classes.formInput}
              error={errors.name}
            />
          </div>

          <div className={classes.formSection}>
            <div className={classes.formLabel}>Address:</div>
            <Input
              type="text"
              {...register('address', {
                required: true,
                minLength: 10,
              })}
              className={classes.formInput}
              error={errors.address}
            />
          </div>

          <div className={classes.buttons}>
            <Button type="submit" text="Save Changes" />
          </div>
        </form>
        <ChangePassword/>
      </div>
    </div>
  );
}
