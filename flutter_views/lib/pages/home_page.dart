import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:collection/collection.dart';
import '../data.dart';
import '../widgets/card_content.dart';
import '../src/widgets/cool_swiper.dart';
import '../main.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => HomePageState();
}

class HomePageState extends State<HomePage> {
  void updateData(List<FlutterHero> namesList) {
    setState(() {
      names = namesList;
    });
  }

  @override
  void initState() {
    super.initState();
    // Init data handling
    platform.setMessageHandler((String? message) async {
      // print('Received: $message');

      Map<String, dynamic> platformMessage = jsonDecode(message!);
      switch (platformMessage['type']) {
        case 'shareNames':
          List<FlutterHero> shareNames = platformMessage['data']
              .map<FlutterHero>((i) => FlutterHero.fromJson(i))
              .toList();
          // print("shareNames...$shareNames");
          updateData(shareNames);
          break;
      }

      return 'success';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: names.isEmpty ? Container() : CoolSwiper(
            children: names.mapIndexed((index, hero) {
              final color = Data.colors[index];
              return CardContent(
                  name: hero.name!, avatar: hero.avatar!, color: color);
            }).toList(),
          ),
        ),
      ),
    );
  }
}
