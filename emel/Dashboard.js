import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="black" />
        <Ionicons name="search" size={28} color="black" />
      </View>

      {/* Suggestions Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Suggestions</Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </View>

      <ScrollView horizontal style={styles.suggestions}>
        <View style={[styles.suggestionBox1, { backgroundColor: '#F85046' }]} />
        <View style={[styles.suggestionBox2, { backgroundColor: '#000000' }]} />
        <View style={[styles.suggestionBox3, { backgroundColor: '#6B9BF2' }]} />
        <View style={[styles.suggestionBox4, { backgroundColor: '#A4E36D' }]} />
        <View style={[styles.suggestionBox5, { backgroundColor: '#F3D063' }]} />
      </ScrollView>

      {/* Create Post Section */}
      <View style={styles.createPost}>
        <Text style={styles.title}>Create Post</Text>
  
        <View style={styles.createPostContent}>
          <Image source={require('../assets/gojo.jpg')} style={styles.profileImage} />
          <TouchableOpacity style={styles.createPostButton}>
            <Text style={styles.createPostText}>Share your knowledge</Text>
            <MaterialIcons name="picture-as-pdf" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>


      {/* Bookmark Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Bookmark</Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </View>

      <View style={styles.bookmarkCard}>
        <View style={styles.bookmarkHeader}>
          <Image source={require('../assets/gojo.jpg')} style={styles.profileImage} />
          <View>
            <Text style={styles.bookmarkTitle}>Introduction to Javascript</Text>
            <Text style={styles.bookmarkAuthor}>Philip Jomer Matias</Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={16} color="gold" />
              <FontAwesome name="star" size={16} color="gold" />
              <FontAwesome name="star" size={16} color="gold" />
              <FontAwesome name="star" size={16} color="gold" />
              <FontAwesome name="star-half-full" size={16} color="gold" />
            </View>
          </View>
        </View>
        <Image source={require('../assets/gojo.jpg')} style={styles.bookmarkImage} />
        <Text style={styles.bookmarkDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        <View style={styles.bookmarkActions}>
          <TouchableOpacity>
            <Text style={styles.actionText}>Leave</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionText}>View</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionText}>Rate</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home" size={28} color="green" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bookmark" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  suggestions: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'column',
  },
  suggestionBox1: {
    width: 133,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  suggestionBox2: {
    width: 94,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  suggestionBox3: {
    width: 79,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  suggestionBox4: {
    width: 50,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  suggestionBox5: {
    width: 50,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  createPost: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  createPostButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  createPostText: {
    
    color: '#333',
    fontSize: 16,
    marginRight: 10,
  },
  title: {
    fontSize: 24, // adjust size as needed
    fontWeight: 'bold', // adjust weight as needed
    marginBottom: 10, // add spacing below the title
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bookmarkCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  bookmarkHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bookmarkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookmarkAuthor: {
    color: '#999',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  bookmarkImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookmarkDescription: {
    color: '#666',
    marginBottom: 10,
  },
  bookmarkActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionText: {
    color: '#333',
    fontWeight: 'bold',
  },
  bottomNav: {
    height: 76,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#B9E185',
  },
  createPost: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,  // Adds some space between the title and the content
  },
  createPostContent: {
    flexDirection: 'row',  // Aligns the image and button horizontally
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,  // Adds space between the image and the button
  },
  createPostButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  createPostText: {
    color: '#333',
    fontSize: 16,
    marginRight: 10,
  },
});

export default Dashboard;
