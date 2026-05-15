// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
// } from "react-native";
// import { useRouter } from "expo-router";

// export default function ThirdPage() {
//   const router = useRouter();

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>

//         {/* Header Section */}
//         <Text style={styles.title}>Time for Medicine</Text>
//         <Text style={styles.subtitle}>Morning Dose: 8:00 AM</Text>

//         <Text style={styles.sectionTitle}>Today’s Schedule</Text>

//         {/* Metformin Card */}
//         <View style={styles.card}>
//           <Text style={styles.medicineName}>Metformin</Text>

//           <Text style={styles.time}>8:00 AM</Text>
//           <Text style={styles.instruction}>Before Food</Text>

//           <View style={styles.buttonRow}>
//             <TouchableOpacity style={styles.skipButton}>
//               <Text style={styles.buttonText}>Skip</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.takenButton}>
//               <Text style={styles.buttonText}>Taken</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Multivitamin Card */}
//         <View style={styles.card}>
//           <Text style={styles.medicineName}>Multivitamin</Text>

//           <Text style={styles.time}>1:00 PM</Text>
//           <Text style={styles.instruction}>After Lunch</Text>

//           <Text style={styles.upcoming}>Upcoming</Text>
//         </View>

//         {/* Aspirin Card */}
//         <View style={styles.card}>
//           <Text style={styles.medicineName}>Aspirin</Text>

//           <Text style={styles.time}>8:00 PM</Text>
//           <Text style={styles.instruction}>With Food</Text>

//           <Text style={styles.upcoming}>Upcoming</Text>
//         </View>

//         {/* Back Button */}
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.back()}
//         >
//           <Text style={styles.backText}>Go Back</Text>
//         </TouchableOpacity>

//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#187be6",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#ececf2",
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 20,
//     color: "#f0e8e8",
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 15,
//     color: "#121313",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 15,
//     elevation: 4,
//   },
//   medicineName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   time: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   instruction: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 10,
//   },
//   buttonRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   skipButton: {
//     backgroundColor: "#E74C3C",
//     padding: 10,
//     borderRadius: 10,
//     width: "45%",
//     alignItems: "center",
//   },
//   takenButton: {
//     backgroundColor: "#2ECC71",
//     padding: 10,
//     borderRadius: 10,
//     width: "45%",
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   upcoming: {
//     marginTop: 10,
//     color: "#F39C12",
//     fontWeight: "bold",
//   },
//   backButton: {
//     backgroundColor: "#e5ecf3",
//     padding: 15,
//     borderRadius: 15,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   backText: {
//     color: "#187be6",
//     fontWeight: "bold",
//   },
// });





import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function ThirdPage() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../../assets/images/smartcare.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <ScrollView>

  {/* 🔙 BACK BUTTON - ADD HERE */}
  <TouchableOpacity
    onPress={() => router.replace("/(tabs)/pages/secondpage")}
  >
    <Text style={{ color: "#fff", fontSize: 18, marginBottom: 10 }}>
      ← Back
    </Text>
  </TouchableOpacity>

  <Text style={styles.title}>Time for Medicine</Text>

          <Text style={styles.title}>Time for Medicine</Text>
          <Text style={styles.subtitle}>Morning Dose: 8:00 AM</Text>

          <Text style={styles.sectionTitle}>Today’s Schedule</Text>

          <View style={styles.card}>
            <Text style={styles.medicineName}>Metformin</Text>
            <Text style={styles.time}>8:00 AM</Text>
            <Text style={styles.instruction}>Before Food</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.skipButton}>
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.takenButton}>
                <Text style={styles.buttonText}>Taken</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.medicineName}>Multivitamin</Text>
            <Text style={styles.time}>1:00 PM</Text>
            <Text style={styles.instruction}>After Lunch</Text>
            <Text style={styles.upcoming}>Upcoming</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.medicineName}>Aspirin</Text>
            <Text style={styles.time}>8:00 PM</Text>
            <Text style={styles.instruction}>With Food</Text>
            <Text style={styles.upcoming}>Upcoming</Text>
          </View>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => router.push("/(tabs)/pages/fourthpage")}
          >
            <Text style={styles.buttonText}>Go To Diet Plan</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },

  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#fff",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#fff",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  medicineName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  time: { fontSize: 16 },

  instruction: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  skipButton: {
    backgroundColor: "#E74C3C",
    padding: 10,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },

  takenButton: {
    backgroundColor: "#2ECC71",
    padding: 10,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  upcoming: {
    marginTop: 10,
    color: "#F39C12",
    fontWeight: "bold",
  },

  nextButton: {
    backgroundColor: "#187be6",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
});



