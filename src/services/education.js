import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  DisabledInput,
  Edit,
  Show,
  SimpleShowLayout,
  EditButton,
  ShowButton
} from "react-admin";

export const EducationList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="fromDate" />
      <DateField source="toDate" />
      <TextField source="degree" />
      <TextField source="institution" />
      <TextField source="city" />
      <TextField source="country" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const EducationShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="fromDate" />
      <DateField source="toDate" />
      <TextField source="degree" />
      <TextField source="institution" />
      <TextField source="city" />
      <TextField source="country" />
      <TextField source="description" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const EducationCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="fromDate" />
      <DateInput source="toDate" />
      <TextInput source="degree" />
      <TextInput source="institution" />
      <TextInput source="city" />
      <TextInput source="country" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);

export const EducationEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <DateInput source="fromDate" />
      <DateInput source="toDate" />
      <TextInput source="degree" />
      <TextInput source="institution" />
      <TextInput source="city" />
      <TextInput source="country" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);