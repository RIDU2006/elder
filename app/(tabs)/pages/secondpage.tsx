// // import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// // import { useRouter } from "expo-router";

// // export default function SecondPage() {
// //   const router = useRouter();

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Welcome to Second Page 🎉</Text>

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => router.back()}
// //       >
// //         <Text style={styles.buttonText}>Go Back</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     marginBottom: 20,
// //   },
// //   button: {
// //     backgroundColor: "#28a745",
// //     padding: 12,
// //     borderRadius: 8,
// //   },
// //   buttonText: {
// //     color: "#fff",
// //     fontWeight: "bold",
// //   },
// // });




// // import React from "react";
// // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// // import { useRouter } from "expo-router";

// // export default function SecondPage() {
// //   const router = useRouter();

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Second Page</Text>

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => router.back()}
// //       >
// //         <Text style={styles.buttonText}>Go Back</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 20,
// //   },
// //   button: {
// //     backgroundColor: "red",
// //     padding: 15,
// //     borderRadius: 8,
// //   },
// //   buttonText: {
// //     color: "#fff",
// //   },
// // });



// // import React from "react";
// // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// // import { useRouter } from "expo-router";

// // export default function SecondPage() {
// //   const router = useRouter();

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Second Page</Text>

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => router.back()}
// //       >
// //         <Text style={styles.buttonText}>Go Back</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 20,
// //   },
// //   button: {
// //     backgroundColor: "red",
// //     padding: 15,
// //     borderRadius: 10,
// //   },
// //   buttonText: {
// //     color: "#fff",
// //   },
// // });



// // import React from "react";
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   SafeAreaView,
// // } from "react-native";
// // import { useRouter } from "expo-router";

// // export default function SecondPage() {
// //   const router = useRouter();

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       {/* Header */}
// //       <View style={styles.headerSection}>
// //         <Text style={styles.greeting}>Good Morning,</Text>
// //         <Text style={styles.name}>Dude</Text>
// //       </View>

// //       {/* Medicine Reminder Card */}
// //       <View style={styles.card}>
// //         <Text style={styles.cardTitle}>Medicine Reminder</Text>
// //         <Text style={styles.cardText}>Next: BP Tablet @10:00 AM</Text>
// //       </View>

// //       {/* Diet Plan Card */}
// //       <View style={styles.card}>
// //         <Text style={styles.cardTitle}>Diet Plan</Text>
// //         <TouchableOpacity style={styles.smallButton}>
// //           <Text style={styles.smallButtonText}>View Lunch Menu</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Health Report Card */}
// //       <View style={styles.card}>
// //         <Text style={styles.cardTitle}>Health Report</Text>
// //         <Text style={styles.cardText}>Weekly Vitals Summary</Text>
// //       </View>

// //       {/* Bottom Navigation */}
// //       <View style={styles.bottomNav}>
// //         <TouchableOpacity>
// //           <Text style={styles.navText}>Home</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity>
// //           <Text style={styles.navText}>Chat</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity onPress={() => router.back()}>
// //           <Text style={styles.navText}>Settings</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#187be6",
// //     padding: 20,
// //     justifyContent: "space-between",
// //   },
// //   headerSection: {
// //     marginTop: 10,
// //   },
// //   greeting: {
// //     fontSize: 30,
// //     color: "#d4e2f0",
// //   },
// //   name: {
// //     fontSize: 28,
// //     fontWeight: "bold",
// //     color: "#d4e2f0",
// //     marginBottom: 20,
// //   },
// //   card: {
// //     backgroundColor: "#fff",
// //     borderRadius: 20,
// //     padding: 20,
// //     marginBottom: 15,
// //     elevation: 4,
// //   },
// //   cardTitle: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     marginBottom: 8,
// //   },
// //   cardText: {
// //     fontSize: 14,
// //     color: "#555",
// //   },
// //   smallButton: {
// //     backgroundColor: "#2E86DE",
// //     padding: 10,
// //     borderRadius: 10,
// //     marginTop: 10,
// //     alignSelf: "flex-start",
// //   },
// //   smallButtonText: {
// //     color: "#fff",
// //     fontWeight: "bold",
// //   },
// //   bottomNav: {
// //     flexDirection: "row",
// //     justifyContent: "space-around",
// //     paddingVertical: 15,
// //     backgroundColor: "#fff",
// //     borderRadius: 20,
// //     elevation: 8,
// //   },
// //   navText: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     color: "#2E86DE",
// //   },
// // });




// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ImageBackground,
// } from "react-native";
// import { useRouter } from "expo-router";

// export default function SecondPage() {
//   const router = useRouter();

//   return (
//     <ImageBackground
//       source={require("../../../assets/images/smartcare.png")}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <SafeAreaView style={styles.overlay}>
        
//         {/* Header */}
//         <View style={styles.headerSection}>
//           <Text style={styles.greeting}>Good Morning,</Text>
//           <Text style={styles.name}>Dude</Text>
//         </View>

//         {/* Medicine Reminder Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Medicine Reminder</Text>
//           <Text style={styles.cardText}>Next: BP Tablet @10:00 AM</Text>
//         </View>

//         {/* Diet Plan Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Diet Plan</Text>
//           <TouchableOpacity style={styles.smallButton}>
//             <Text style={styles.smallButtonText}>View Lunch Menu</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Health Report Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Health Report</Text>
//           <Text style={styles.cardText}>Weekly Vitals Summary</Text>
//         </View>

//         {/* Bottom Navigation */}
//         <View style={styles.bottomNav}>
//           <TouchableOpacity>
//             <Text style={styles.navText}>Home</Text>
//           </TouchableOpacity>

//           <TouchableOpacity>
//             <Text style={styles.navText}>Chat</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => router.back()}>
//             <Text style={styles.navText}>Settings</Text>
//           </TouchableOpacity>
//         </View>

//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },

//   overlay: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "space-between",
//     backgroundColor: "rgba(0,0,0,0.35)",
//   },

//   headerSection: {
//     marginTop: 10,
//   },

//   greeting: {
//     fontSize: 30,
//     color: "#fff",
//   },

//   name: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 20,
//   },

//   card: {
//     backgroundColor: "rgba(255,255,255,0.95)",
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 15,
//   },

//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },

//   cardText: {
//     fontSize: 14,
//     color: "#555",
//   },

//   smallButton: {
//     backgroundColor: "#2E86DE",
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 10,
//     alignSelf: "flex-start",
//   },

//   smallButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },

//   bottomNav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 15,
//     backgroundColor: "rgba(255,255,255,0.95)",
//     borderRadius: 20,
//   },

//   navText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#2E86DE",
//   },
// });







// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ImageBackground,
// } from "react-native";
// import { useRouter } from "expo-router";

// export default function SecondPage() {
//   const router = useRouter();

//   return (
//     <ImageBackground
//       source={require("../../../assets/images/smartcare.png")}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <SafeAreaView style={styles.overlay}>
        
//         {/* Header */}
//         <View style={styles.headerSection}>
//           <Text style={styles.greeting}>Good Morning,</Text>
//           <Text style={styles.name}>Dude</Text>
//         </View>

//         {/* Medicine Reminder Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Medicine Reminder</Text>
//           <Text style={styles.cardText}>Next: BP Tablet @10:00 AM</Text>

//           <TouchableOpacity
//             style={styles.smallButton}
//             onPress={() => router.push("/(tabs)/pages/thirdpage")}
//           >
//             <Text style={styles.smallButtonText}>View Medicine Details</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Diet Plan Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Diet Plan</Text>

//           <TouchableOpacity
//             style={styles.smallButton}
//             onPress={() => router.push("/(tabs)/pages/fourthpage")}
//           >
//             <Text style={styles.smallButtonText}>View Lunch Menu</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Health Report Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Health Report</Text>
//           <Text style={styles.cardText}>Weekly Vitals Summary</Text>
//         </View>

//         {/* Bottom Navigation */}
//         <View style={styles.bottomNav}>
          
//           {/* Home → index.tsx */}
//           <TouchableOpacity onPress={() => router.push("/(tabs)")}>
//             <Text style={styles.navText}>Home</Text>
//           </TouchableOpacity>

//           {/* Chat → thirdpage.tsx */}
//           <TouchableOpacity
//             onPress={() => router.push("/(tabs)/pages/thirdpage")}
//           >
//             <Text style={styles.navText}>Chat</Text>
//           </TouchableOpacity>

//           {/* Settings → back */}
//           <TouchableOpacity onPress={() => router.back()}>
//             <Text style={styles.navText}>Settings</Text>
//           </TouchableOpacity>

//         </View>

//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },

//   overlay: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "space-between",
//     backgroundColor: "rgba(0,0,0,0.35)",
//   },

//   headerSection: {
//     marginTop: 10,
//   },

//   greeting: {
//     fontSize: 30,
//     color: "#fff",
//   },

//   name: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 20,
//   },

//   card: {
//     backgroundColor: "rgba(255,255,255,0.95)",
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 15,
//   },

//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },

//   cardText: {
//     fontSize: 14,
//     color: "#555",
//   },

//   smallButton: {
//     backgroundColor: "#2E86DE",
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 10,
//     alignSelf: "flex-start",
//   },

//   smallButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },

//   bottomNav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 15,
//     backgroundColor: "rgba(255,255,255,0.95)",
//     borderRadius: 20,
//   },

//   navText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#2E86DE",
//   },
// });






import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function SecondPage() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../../assets/images/smartcare.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>

        {/* Header */}
        <View style={styles.headerSection}>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.name}>Dude</Text>
        </View>

        {/* Medicine Reminder */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Medicine Reminder</Text>
          <Text style={styles.cardText}>Next: BP Tablet @10:00 AM</Text>

          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => router.push("/(tabs)/pages/thirdpage")}
          >
            <Text style={styles.smallButtonText}>View Medicine Details</Text>
          </TouchableOpacity>
        </View>

        {/* Diet Plan */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Diet Plan</Text>

          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => router.push("/(tabs)/pages/fourthpage")}
          >
            <Text style={styles.smallButtonText}>View Lunch Menu</Text>
          </TouchableOpacity>
        </View>

        {/* Health Report */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Health Report</Text>
          <Text style={styles.cardText}>Weekly Vitals Summary</Text>

          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => router.push("/(tabs)/pages/fivthpage")}
          >
            <Text style={styles.smallButtonText}>View Health Report</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>

          {/* Home */}
          <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          {/* Chat → Medicine */}
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/pages/thirdpage")}
          >
            <Text style={styles.navText}>Chat</Text>
          </TouchableOpacity>

          {/* Settings */}
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  headerSection: {
    marginTop: 10,
  },

  greeting: {
    fontSize: 30,
    color: "#fff",
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    color: "#555",
  },

  smallButton: {
    backgroundColor: "#2E86DE",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: "flex-start",
  },

  smallButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
  },

  navText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E86DE",
  },
});




