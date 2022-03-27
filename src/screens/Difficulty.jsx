import React from 'react';
import {
  StyleSheet, ScrollView, View, Text, SectionList,
} from 'react-native';
import { string } from 'prop-types';

export default function Difficulty() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.titleText}>むずかしさとは？</Text>
        </View>
        <View style={styles.explanation}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.itemHeader}>
                { title }
                のとき
              </Text>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const DATA = [
  {
    title: 'たしざん',
    data: ['1：1桁＋1桁', '2：2桁＋1桁', '3：2桁＋2桁', '4：3桁＋2桁', '5：3桁＋2桁', '6：3桁＋3桁'],
  },
  {
    title: 'ひきざん',
    data: ['1：1桁−1桁', '2：2桁−1桁', '3：2桁−2桁', '4：3桁−2桁', '5：3桁−2桁', '6：3桁−3桁'],
  },
  {
    title: 'かけざん',
    data: ['1：1桁×1桁', '2：2桁×1桁', '3：3桁×1桁', '4：4桁×1桁', '5：2桁×2桁', '6：3桁×2桁'],
  },
  {
    title: 'わりざん',
    data: ['1：2桁÷1桁（あまりなし）', '2：2桁÷1桁（あまりあり）', '3：3桁÷1桁（あまりなし）', '4：3桁÷1桁（あまりあり）', '5：3桁÷2桁（あまりなし）', '6：3桁÷2桁（あまりあり）'],
  },
];

function Item(props) {
  const { title } = props;
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  );
}

Item.propTypes = {
  title: string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  content: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    paddingBottom: 8,
  },
  titleText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  explanation: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 32,
  },
  item: {
    paddingLeft: 12,
  },
  itemHeader: {
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  itemTitle: {
    fontWeight: 'normal',
  },
});
