// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// export default function LoginScreen() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     router.push("/(tabs)/pages/firstpage");
//   };

//   return (
//     <ImageBackground
//       source={require("../../assets/images/caregiver.png")}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <KeyboardAvoidingView
//         style={styles.container}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//       >
//         <View style={styles.overlay}>

//           <Text style={styles.header}>SmartCare System</Text>

//           <View style={styles.iconCircle}>
//             <Ionicons name="medical" size={40} color="#2ecc71" />
//           </View>

//           <Text style={styles.title}>Welcome Back</Text>

//           <Text style={styles.subtitle}>
//             please sign in to your SmartCare account to continue.
//           </Text>

//           <Text style={styles.label}>Phone Number or Email</Text>

//           <TextInput
//             style={styles.input}
//             placeholder=""
//             value={email}
//             onChangeText={setEmail}
//           />

//           <Text style={styles.label}>Password</Text>

//           <TextInput
//             style={styles.input}
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//           />

//           <TouchableOpacity>
//             <Text style={styles.forgot}>Forget password ?</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//             <Text style={styles.loginText}>Login</Text>
//           </TouchableOpacity>

//           <Text style={styles.footer}>
//             New to Smartcare?{" "}
//             <Text
//               style={styles.create}
//               onPress={() => router.push("/(tabs)/pages/firstpage")}
//             >
//               Create Account
//             </Text>
//           </Text>

//         </View>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },

//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 25,
//   },

//   overlay: {
//     backgroundColor: "rgba(255,255,255,0.9)",
//     borderRadius: 20,
//     padding: 25,
//   },

//   header: {
//     textAlign: "center",
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },

//   iconCircle: {
//     alignSelf: "center",
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 50,
//     marginBottom: 10,
//     borderWidth: 3,
//     borderColor: "#2ecc71",
//   },

//   title: {
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//   },

//   subtitle: {
//     textAlign: "center",
//     fontSize: 12,
//     marginBottom: 20,
//     color: "#555",
//   },

//   label: {
//     fontWeight: "600",
//     marginTop: 10,
//     marginBottom: 5,
//   },

//   input: {
//     backgroundColor: "#dcdcdc",
//     padding: 12,
//     borderRadius: 10,
//   },

//   forgot: {
//     textAlign: "right",
//     marginTop: 5,
//     marginBottom: 15,
//   },

//   loginButton: {
//     backgroundColor: "#6abf2e",
//     padding: 14,
//     borderRadius: 10,
//     marginTop: 5,
//   },

//   loginText: {
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "bold",
//     fontSize: 16,
//   },

//   footer: {
//     textAlign: "center",
//     marginTop: 20,
//   },

//   create: {
//     color: "#2ecc71",
//     fontWeight: "bold",
//   },
// });





import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  router.replace("/(tabs)/pages/secondpage");
 };

  return (
    <ImageBackground
      source={require("../../assets/images/smartcare.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.card}>

          <Text style={styles.header}>SmartCare System</Text>

          <View style={styles.iconContainer}>
            <Ionicons name="medical" size={40} color="#2ecc71" />
          </View>

          <Text style={styles.title}>Welcome Back</Text>

          <Text style={styles.subtitle}>
            Please sign in to your SmartCare account to continue.
          </Text>

          <Text style={styles.label}>Phone Number or Email</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Email or Phone"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity>
            <Text style={styles.forgot}>Forget password ?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            New to Smartcare?{" "}
            <Text
              style={styles.create}
              onPress={() => router.push("/(tabs)/pages/firstpage")}
            >
              Create Account
            </Text>
          </Text>

        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 25,
    borderRadius: 20,
  },

  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  iconContainer: {
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 20,
    color: "#555",
  },

  label: {
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
  },

  input: {
    backgroundColor: "#ddd",
    padding: 12,
    borderRadius: 10,
  },

  forgot: {
    textAlign: "right",
    marginTop: 5,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2E86DE",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  footer: {
    textAlign: "center",
    marginTop: 20,
  },

  create: {
    color: "#2E86DE",
    fontWeight: "bold",
  },
});






