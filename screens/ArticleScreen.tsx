import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default function ArticleScreen({ route }: any) {
  const { article } = route.params;

  return (
    <SafeAreaView style={style.container}>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
}
