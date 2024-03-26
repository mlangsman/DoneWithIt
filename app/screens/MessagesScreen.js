import { React, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colours from "../config/colours";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Title",
    description: "Description",
    image: require("../assets/avatar2.jpg"),
  },
  {
    id: 2,
    title: "Title",
    description: "Description",
    image: require("../assets/avatar2.jpg"),
  },
];

const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subtitle={item.description}
            onPress={() => {
              console.log(item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            ...messages,
            {
              id: messages.length + 1,
              title: "Title",
              description: "Description",
              image: require("../assets/avatar2.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colours.white,
  },
});

export default MessagesScreen;
