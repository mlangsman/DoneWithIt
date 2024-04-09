import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Ionicons } from "@expo/vector-icons";

import colours from "../../config/colours";
import Icon from "../Icon";

const ListItem = ({
  image,
  title = "Title",
  subtitle,
  onPress,
  renderRightActions,
  style,
  IconComponent,
  showChevron = true,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colours.light}>
        <View style={[styles.listItem, style]}>
          {IconComponent ? ( // Check if IconComponent is provided
            <View style={styles.icon}>{IconComponent}</View>
          ) : (
            image && <Image style={styles.image} source={image} /> // Render image if provided
          )}

          <View style={styles.metaContainer}>
            <AppText style={styles.metaTitleText} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.metaSubtitleText} numberOfLines={3}>
                {subtitle}
              </AppText>
            )}
          </View>
          {showChevron && (
            <Icon
              name="chevron-forward"
              backgroundColor={colours.white}
              color={colours.medium}
              size={36}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  listItem: {
    flex: -1,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    padding: 16,
  },
  image: {
    height: null,
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  metaTitleText: {
    fontWeight: "600",
    fontSize: 14,
  },
  metaSubtitleText: {
    color: colours.medium,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  metaContainer: {
    flex: 1,
    alignContent: "center",
  },
});

export default ListItem;
