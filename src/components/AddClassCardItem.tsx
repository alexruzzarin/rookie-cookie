import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormCardItem, Button, Input, TextArea, Select } from './styled';
import ImageInput from './ImageInput';
import useClasses from '../hooks/useClasses';
import useShowAddClass from '../hooks/useShowAddClass';
import { NewKlass } from '../classes';

const AddClassCardItem: React.FC = () => {
  const { addClass } = useClasses();
  const { hideAddClass } = useShowAddClass();

  const { register, handleSubmit, reset } = useForm<NewKlass>();

  const onSubmit = useCallback(
    (values) => {
      addClass({
        ...values,
        duration: Number(values.duration),
      });
      reset();
      hideAddClass();
    },
    [addClass, hideAddClass, reset],
  );

  const onCancel = useCallback(() => {
    reset();
    hideAddClass();
  }, [reset, hideAddClass]);

  useEffect(() => {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <FormCardItem>
      <header>
        <h3>Add Class</h3>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <span role="img" aria-label="Class Type">
              🏷
            </span>{' '}
            <Select
              placeholder="Type"
              name="classType"
              ref={register({ required: true })}
            >
              <option value="on-demand">On-Demand</option>
              <option value="live">Live</option>
            </Select>
          </label>
          <label>
            <span role="img" aria-label="Class Title">
              🧾
            </span>
            <Input
              placeholder="Title"
              name="title"
              ref={register({ required: true })}
            />
          </label>
          <label>
            <span role="img" aria-label="Class Description">
              📄
            </span>
            <TextArea
              placeholder="Description"
              name="description"
              ref={register({ required: true })}
            />
          </label>
          <label>
            <span role="img" aria-label="Class Instructor">
              👩‍🍳
            </span>
            <Input
              placeholder="Instructor"
              name="instructor"
              ref={register({ required: true })}
            />
          </label>
          <label>
            <span role="img" aria-label="Class Duration">
              ⏲
            </span>
            <Input
              placeholder="Duration"
              type="number"
              name="duration"
              ref={register({ required: true })}
            />
          </label>
        </div>
        <ImageInput name="featureImage" register={register} />
        <footer>
          <Button type="reset" title="Cancel" onClick={onCancel}>
            <span role="img" aria-label="Cancel">
              🚫
            </span>
          </Button>
          <Button type="submit" title="Save">
            <span role="img" aria-label="Save">
              💾
            </span>
          </Button>
        </footer>
      </form>
    </FormCardItem>
  );
};

export default AddClassCardItem;
