import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { RadioButton, List, Button } from "react-native-paper";
import { gql, useQuery } from "@apollo/client";

const GET_POST = gql`
  query {
    reports {
      _id
      title
      description
      url
    }
  }
`;

const ReportList = () => {
  const [value, setValue] = React.useState("");
  const { loading, error, data } = useQuery(GET_POST);

  if (loading) return <Text>Sus reportes se estan cargando</Text>;
  if (error) return <Text>Error!!</Text>;
  console.log(value);
  return (
    <View styles={styles.container}>
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        {data.reports.map((reports) => (
          <RadioButton.Item
            key={reports._id}
            color="#253659"
            label={reports.title}
            value={reports._id}
          />
        ))}
      </RadioButton.Group>
    </View>
  );
};

export default ReportList;
const styles = StyleSheet.create({
  container: {},
});
