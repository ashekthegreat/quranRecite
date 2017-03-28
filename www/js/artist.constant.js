(function(){

    var ARTISTS = [
        {
            "id": 1,
            "name": "Mishary Rashid Alafasy",
            "bio": "Sheikh Mishary bin Rashid bin Gharib bin Muhammad Alafasy  born in Kuwait in September 5, 1976. He is a Kuwaiti preacher, imam Quran reciter and nasheed artist. He is known for his unique recitation of Quran and his beautiful voice, many qaris are impressed by him and try to imitate his beautiful mode of recitation. He is also known as Abu Rashid Mishary Alafasy is recognized for his beautiful voice and unique recitation of the Quran. Many reciters have come to imitate his mode of recitation.",
            "path": "alafasy",
            "tracks": [
                {
                    "id": 1,
                    "fileName": "001.mp3",
                    "size": 417792,
                    "title": "Surat Al-Fatiha"
                },
                {
                    "id": 2,
                    "fileName": "002.mp3",
                    "size": 60608512,
                    "title": "Surat Al-Baqara"
                },
                {
                    "id": 3,
                    "fileName": "003.mp3",
                    "size": 37806080,
                    "title": "Surat Aal-E-Imran"
                },
                {
                    "id": 4,
                    "fileName": "004.mp3",
                    "size": 38379520,
                    "title": "Surat An-Nisa"
                },
                {
                    "id": 5,
                    "fileName": "005.mp3",
                    "size": 30253056,
                    "title": "Surat Al-Maeda"
                },
                {
                    "id": 6,
                    "fileName": "006.mp3",
                    "size": 34803712,
                    "title": "Surat Al-Anaam"
                },
                {
                    "id": 7,
                    "fileName": "007.mp3",
                    "size": 39964672,
                    "title": "Surat Al-Araf"
                },
                {
                    "id": 8,
                    "fileName": "008.mp3",
                    "size": 14708736,
                    "title": "Surat Al-Anfal"
                },
                {
                    "id": 9,
                    "fileName": "009.mp3",
                    "size": 28999680,
                    "title": "Surat At-Tawba"
                },
                {
                    "id": 10,
                    "fileName": "010.mp3",
                    "size": 21704704,
                    "title": "Surat Yunus"
                },
                {
                    "id": 11,
                    "fileName": "011.mp3",
                    "size": 22290432,
                    "title": "Surat Hud"
                },
                {
                    "id": 12,
                    "fileName": "012.mp3",
                    "size": 20201472,
                    "title": "Surat Yusuf"
                },
                {
                    "id": 13,
                    "fileName": "013.mp3",
                    "size": 9850880,
                    "title": "Surat Ar-Rad"
                },
                {
                    "id": 14,
                    "fileName": "014.mp3",
                    "size": 9822208,
                    "title": "Surat Ibrahim"
                },
                {
                    "id": 15,
                    "fileName": "015.mp3",
                    "size": 7639040,
                    "title": "Surat Al-Hijr"
                },
                {
                    "id": 16,
                    "fileName": "016.mp3",
                    "size": 20348928,
                    "title": "Surat An-Nahl"
                },
                {
                    "id": 17,
                    "fileName": "017.mp3",
                    "size": 15978496,
                    "title": "Surat Al-Isra"
                },
                {
                    "id": 18,
                    "fileName": "018.mp3",
                    "size": 16084992,
                    "title": "Surat Al-Kahf"
                },
                {
                    "id": 19,
                    "fileName": "019.mp3",
                    "size": 10264576,
                    "title": "Surat Maryam"
                },
                {
                    "id": 20,
                    "fileName": "020.mp3",
                    "size": 13025280,
                    "title": "Surat Ta-Ha"
                },
                {
                    "id": 21,
                    "fileName": "021.mp3",
                    "size": 12681216,
                    "title": "Surat Al-Anbiya"
                },
                {
                    "id": 22,
                    "fileName": "022.mp3",
                    "size": 14180352,
                    "title": "Surat Al-Hajj"
                },
                {
                    "id": 23,
                    "fileName": "023.mp3",
                    "size": 12001280,
                    "title": "Surat Al-Mumenoon"
                },
                {
                    "id": 24,
                    "fileName": "024.mp3",
                    "size": 14725120,
                    "title": "Surat An-Noor"
                },
                {
                    "id": 25,
                    "fileName": "025.mp3",
                    "size": 8814592,
                    "title": "Surat Al-Furqan"
                },
                {
                    "id": 26,
                    "fileName": "026.mp3",
                    "size": 14778368,
                    "title": "Surat Ash-Shu'ara"
                },
                {
                    "id": 27,
                    "fileName": "027.mp3",
                    "size": 12578816,
                    "title": "Surat An-Naml"
                },
                {
                    "id": 28,
                    "fileName": "028.mp3",
                    "size": 15233024,
                    "title": "Surat Al-Qasas"
                },
                {
                    "id": 29,
                    "fileName": "029.mp3",
                    "size": 10285056,
                    "title": "Surat Al-Ankaboot"
                },
                {
                    "id": 30,
                    "fileName": "030.mp3",
                    "size": 9371648,
                    "title": "Surat Ar-Room"
                },
                {
                    "id": 31,
                    "fileName": "031.mp3",
                    "size": 5722112,
                    "title": "Surat Luqman"
                },
                {
                    "id": 32,
                    "fileName": "032.mp3",
                    "size": 4194304,
                    "title": "Surat As-Sajda"
                },
                {
                    "id": 33,
                    "fileName": "033.mp3",
                    "size": 14061568,
                    "title": "Surat Al-Ahzab"
                },
                {
                    "id": 34,
                    "fileName": "034.mp3",
                    "size": 9146368,
                    "title": "Surat Saba"
                },
                {
                    "id": 35,
                    "fileName": "035.mp3",
                    "size": 8458240,
                    "title": "Surat Fatir"
                },
                {
                    "id": 36,
                    "fileName": "036.mp3",
                    "size": 8482816,
                    "title": "Surat Ya-Seen"
                },
                {
                    "id": 37,
                    "fileName": "037.mp3",
                    "size": 11714560,
                    "title": "Surat As-Saaffat"
                },
                {
                    "id": 38,
                    "fileName": "038.mp3",
                    "size": 8560640,
                    "title": "Surat Sad"
                },
                {
                    "id": 39,
                    "fileName": "039.mp3",
                    "size": 13041664,
                    "title": "Surat Az-Zumar"
                },
                {
                    "id": 40,
                    "fileName": "040.mp3",
                    "size": 12660736,
                    "title": "Surat Al-Ghafir"
                },
                {
                    "id": 41,
                    "fileName": "041.mp3",
                    "size": 9285632,
                    "title": "Surat Fussilat"
                },
                {
                    "id": 42,
                    "fileName": "042.mp3",
                    "size": 9359360,
                    "title": "Surat Ash-Shura"
                },
                {
                    "id": 43,
                    "fileName": "043.mp3",
                    "size": 9830400,
                    "title": "Surat Az-Zukhruf"
                },
                {
                    "id": 44,
                    "fileName": "044.mp3",
                    "size": 4734976,
                    "title": "Surat Ad-Dukhan"
                },
                {
                    "id": 45,
                    "fileName": "045.mp3",
                    "size": 5206016,
                    "title": "Surat Al-Jathiya"
                },
                {
                    "id": 46,
                    "fileName": "046.mp3",
                    "size": 7663616,
                    "title": "Surat Al-Ahqaf"
                },
                {
                    "id": 47,
                    "fileName": "047.mp3",
                    "size": 5906432,
                    "title": "Surat Muhammad"
                },
                {
                    "id": 48,
                    "fileName": "048.mp3",
                    "size": 5775360,
                    "title": "Surat Al-Fath"
                },
                {
                    "id": 49,
                    "fileName": "049.mp3",
                    "size": 4124672,
                    "title": "Surat Al-Hujraat"
                },
                {
                    "id": 50,
                    "fileName": "050.mp3",
                    "size": 4481024,
                    "title": "Surat Qaf"
                },
                {
                    "id": 51,
                    "fileName": "051.mp3",
                    "size": 4358144,
                    "title": "Surat Adh-Dhariyat"
                },
                {
                    "id": 52,
                    "fileName": "052.mp3",
                    "size": 3883008,
                    "title": "Surat At-Tur"
                },
                {
                    "id": 53,
                    "fileName": "053.mp3",
                    "size": 3694592,
                    "title": "Surat An-Najm"
                },
                {
                    "id": 54,
                    "fileName": "054.mp3",
                    "size": 3862528,
                    "title": "Surat Al-Qamar"
                },
                {
                    "id": 55,
                    "fileName": "055.mp3",
                    "size": 5435392,
                    "title": "Surat Ar-Rahman"
                },
                {
                    "id": 56,
                    "fileName": "056.mp3",
                    "size": 5738496,
                    "title": "Surat Al-Waqia"
                },
                {
                    "id": 57,
                    "fileName": "057.mp3",
                    "size": 6586368,
                    "title": "Surat Al-Hadid"
                },
                {
                    "id": 58,
                    "fileName": "058.mp3",
                    "size": 4907008,
                    "title": "Surat Al-Mujadila"
                },
                {
                    "id": 59,
                    "fileName": "059.mp3",
                    "size": 5013504,
                    "title": "Surat Al-Hashr"
                },
                {
                    "id": 60,
                    "fileName": "060.mp3",
                    "size": 3612672,
                    "title": "Surat Al-Mumtahina"
                },
                {
                    "id": 61,
                    "fileName": "061.mp3",
                    "size": 2342912,
                    "title": "Surat As-Saff"
                },
                {
                    "id": 62,
                    "fileName": "062.mp3",
                    "size": 1712128,
                    "title": "Surat Al-Jumua"
                },
                {
                    "id": 63,
                    "fileName": "063.mp3",
                    "size": 2068480,
                    "title": "Surat Al-Munafiqoon"
                },
                {
                    "id": 64,
                    "fileName": "064.mp3",
                    "size": 2600960,
                    "title": "Surat At-Taghabun"
                },
                {
                    "id": 65,
                    "fileName": "065.mp3",
                    "size": 2891776,
                    "title": "Surat At-Talaq"
                },
                {
                    "id": 66,
                    "fileName": "066.mp3",
                    "size": 2977792,
                    "title": "Surat At-Tahrim"
                },
                {
                    "id": 67,
                    "fileName": "067.mp3",
                    "size": 3645440,
                    "title": "Surat Al-Mulk"
                },
                {
                    "id": 68,
                    "fileName": "068.mp3",
                    "size": 3649536,
                    "title": "Surat Al-Qalam"
                },
                {
                    "id": 69,
                    "fileName": "069.mp3",
                    "size": 3248128,
                    "title": "Surat Al-Haaqqa"
                },
                {
                    "id": 70,
                    "fileName": "070.mp3",
                    "size": 2547712,
                    "title": "Surat Al-Maarij"
                },
                {
                    "id": 71,
                    "fileName": "071.mp3",
                    "size": 2248704,
                    "title": "Surat Nooh"
                },
                {
                    "id": 72,
                    "fileName": "072.mp3",
                    "size": 2682880,
                    "title": "Surat Al-Jinn"
                },
                {
                    "id": 73,
                    "fileName": "073.mp3",
                    "size": 1953792,
                    "title": "Surat Al-Muzzammil"
                },
                {
                    "id": 74,
                    "fileName": "074.mp3",
                    "size": 2596864,
                    "title": "Surat Al-Muddaththir"
                },
                {
                    "id": 75,
                    "fileName": "075.mp3",
                    "size": 1695744,
                    "title": "Surat Al-Qiyama"
                },
                {
                    "id": 76,
                    "fileName": "076.mp3",
                    "size": 2523136,
                    "title": "Surat Al-Insan"
                },
                {
                    "id": 77,
                    "fileName": "077.mp3",
                    "size": 2396160,
                    "title": "Surat Al-Mursalat"
                },
                {
                    "id": 78,
                    "fileName": "078.mp3",
                    "size": 2338816,
                    "title": "Surat An-Naba"
                },
                {
                    "id": 79,
                    "fileName": "079.mp3",
                    "size": 2052096,
                    "title": "Surat An-Naziat"
                },
                {
                    "id": 80,
                    "fileName": "080.mp3",
                    "size": 1765376,
                    "title": "Surat Abasa"
                },
                {
                    "id": 81,
                    "fileName": "081.mp3",
                    "size": 1269760,
                    "title": "Surat At-Takwir"
                },
                {
                    "id": 82,
                    "fileName": "082.mp3",
                    "size": 1097728,
                    "title": "Surat Al-Infitar"
                },
                {
                    "id": 83,
                    "fileName": "083.mp3",
                    "size": 2486272,
                    "title": "Surat Al-Mutaffifin"
                },
                {
                    "id": 84,
                    "fileName": "084.mp3",
                    "size": 1286144,
                    "title": "Surat Al-Inshiqaq"
                },
                {
                    "id": 85,
                    "fileName": "085.mp3",
                    "size": 1589248,
                    "title": "Surat Al-Burooj"
                },
                {
                    "id": 86,
                    "fileName": "086.mp3",
                    "size": 802816,
                    "title": "Surat At-Tariq"
                },
                {
                    "id": 87,
                    "fileName": "087.mp3",
                    "size": 864256,
                    "title": "Surat Al-Ala"
                },
                {
                    "id": 88,
                    "fileName": "088.mp3",
                    "size": 1077248,
                    "title": "Surat Al-Ghashiya"
                },
                {
                    "id": 89,
                    "fileName": "089.mp3",
                    "size": 1708032,
                    "title": "Surat Al-Fajr"
                },
                {
                    "id": 90,
                    "fileName": "090.mp3",
                    "size": 962560,
                    "title": "Surat Al-Balad"
                },
                {
                    "id": 91,
                    "fileName": "091.mp3",
                    "size": 679936,
                    "title": "Surat Ash-Shams"
                },
                {
                    "id": 92,
                    "fileName": "092.mp3",
                    "size": 897024,
                    "title": "Surat Al-Lail"
                },
                {
                    "id": 93,
                    "fileName": "093.mp3",
                    "size": 524288,
                    "title": "Surat Ad-Dhuha"
                },
                {
                    "id": 94,
                    "fileName": "094.mp3",
                    "size": 348160,
                    "title": "Surat Al-Inshirah"
                },
                {
                    "id": 95,
                    "fileName": "095.mp3",
                    "size": 520192,
                    "title": "Surat At-Tin"
                },
                {
                    "id": 96,
                    "fileName": "096.mp3",
                    "size": 761856,
                    "title": "Surat Al-Alaq"
                },
                {
                    "id": 97,
                    "fileName": "097.mp3",
                    "size": 364544,
                    "title": "Surat Al-Qadr"
                },
                {
                    "id": 98,
                    "fileName": "098.mp3",
                    "size": 1015808,
                    "title": "Surat Al-Bayyina"
                },
                {
                    "id": 99,
                    "fileName": "099.mp3",
                    "size": 483328,
                    "title": "Surat Az-Zalzala"
                },
                {
                    "id": 100,
                    "fileName": "100.mp3",
                    "size": 561152,
                    "title": "Surat Al-Adiyat"
                },
                {
                    "id": 101,
                    "fileName": "101.mp3",
                    "size": 503808,
                    "title": "Surat Al-Qaria"
                },
                {
                    "id": 102,
                    "fileName": "102.mp3",
                    "size": 503808,
                    "title": "Surat At-Takathur"
                },
                {
                    "id": 103,
                    "fileName": "103.mp3",
                    "size": 221184,
                    "title": "Surat Al-Asr"
                },
                {
                    "id": 104,
                    "fileName": "104.mp3",
                    "size": 466944,
                    "title": "Surat Al-Humaza"
                },
                {
                    "id": 105,
                    "fileName": "105.mp3",
                    "size": 393216,
                    "title": "Surat Al-Fil"
                },
                {
                    "id": 106,
                    "fileName": "106.mp3",
                    "size": 344064,
                    "title": "Surat Quraish"
                },
                {
                    "id": 107,
                    "fileName": "107.mp3",
                    "size": 462848,
                    "title": "Surat Al-Maun"
                },
                {
                    "id": 108,
                    "fileName": "108.mp3",
                    "size": 200704,
                    "title": "Surat Al-Kauther"
                },
                {
                    "id": 109,
                    "fileName": "109.mp3",
                    "size": 438272,
                    "title": "Surat Al-Kafiroon"
                },
                {
                    "id": 110,
                    "fileName": "110.mp3",
                    "size": 282624,
                    "title": "Surat An-Nasr"
                },
                {
                    "id": 111,
                    "fileName": "111.mp3",
                    "size": 335872,
                    "title": "Surat Al-Masadd"
                },
                {
                    "id": 112,
                    "fileName": "112.mp3",
                    "size": 176128,
                    "title": "Surat Al-Ikhlas"
                },
                {
                    "id": 113,
                    "fileName": "113.mp3",
                    "size": 266240,
                    "title": "Surat Al-Falaq"
                },
                {
                    "id": 114,
                    "fileName": "114.mp3",
                    "size": 401408,
                    "title": "Surat An-Nas"
                }
            ]
        },
        {
            "id": 2,
            "name": "Abdul Rahman Al-Sudais",
            "bio": "Abdul Rahman Ibn Abdul Aziz as-Sudais born 1960 in Riyadh, Saudi Arabia. He is the imam of the Grand mosque in Mecca, Saudi Arabia, a renowned qari, and he was the Dubai International Holy Quran Award's 'Islamic Personality Of the Year' in 2005. Al-Sudais has preached Islam's opposition to 'explosions and terrorism', and has called for peaceful inter-faith dialogue, but also been sharply criticized for vilifying non-Muslims and especially Jews in his sermons. Abdul Rahman Al-Sudais is regarded as the second most beautiful and famous Quran reciter in the world.",
            "path": "sudais",
            "tracks": [
                {
                    "id": 1,
                    "fileName": "001.mp3",
                    "size": 307200,
                    "title": "Surat Al-Fatiha"
                },
                {
                    "id": 2,
                    "fileName": "002.mp3",
                    "size": 47583232,
                    "title": "Surat Al-Baqara"
                },
                {
                    "id": 3,
                    "fileName": "003.mp3",
                    "size": 26521600,
                    "title": "Surat Aal-E-Imran"
                },
                {
                    "id": 4,
                    "fileName": "004.mp3",
                    "size": 29233152,
                    "title": "Surat An-Nisa"
                },
                {
                    "id": 5,
                    "fileName": "005.mp3",
                    "size": 21549056,
                    "title": "Surat Al-Maeda"
                },
                {
                    "id": 6,
                    "fileName": "006.mp3",
                    "size": 22605824,
                    "title": "Surat Al-Anaam"
                },
                {
                    "id": 7,
                    "fileName": "007.mp3",
                    "size": 25722880,
                    "title": "Surat Al-Araf"
                },
                {
                    "id": 8,
                    "fileName": "008.mp3",
                    "size": 9617408,
                    "title": "Surat Al-Anfal"
                },
                {
                    "id": 9,
                    "fileName": "009.mp3",
                    "size": 19636224,
                    "title": "Surat At-Tawba"
                },
                {
                    "id": 10,
                    "fileName": "010.mp3",
                    "size": 13983744,
                    "title": "Surat Yunus"
                },
                {
                    "id": 11,
                    "fileName": "011.mp3",
                    "size": 15069184,
                    "title": "Surat Hud"
                },
                {
                    "id": 12,
                    "fileName": "012.mp3",
                    "size": 13029376,
                    "title": "Surat Yusuf"
                },
                {
                    "id": 13,
                    "fileName": "013.mp3",
                    "size": 7131136,
                    "title": "Surat Ar-Rad"
                },
                {
                    "id": 14,
                    "fileName": "014.mp3",
                    "size": 6295552,
                    "title": "Surat Ibrahim"
                },
                {
                    "id": 15,
                    "fileName": "015.mp3",
                    "size": 5271552,
                    "title": "Surat Al-Hijr"
                },
                {
                    "id": 16,
                    "fileName": "016.mp3",
                    "size": 13832192,
                    "title": "Surat An-Nahl"
                },
                {
                    "id": 17,
                    "fileName": "017.mp3",
                    "size": 12173312,
                    "title": "Surat Al-Isra"
                },
                {
                    "id": 18,
                    "fileName": "018.mp3",
                    "size": 11370496,
                    "title": "Surat Al-Kahf"
                },
                {
                    "id": 19,
                    "fileName": "019.mp3",
                    "size": 7528448,
                    "title": "Surat Maryam"
                },
                {
                    "id": 20,
                    "fileName": "020.mp3",
                    "size": 9150464,
                    "title": "Surat Ta-Ha"
                },
                {
                    "id": 21,
                    "fileName": "021.mp3",
                    "size": 9154560,
                    "title": "Surat Al-Anbiya"
                },
                {
                    "id": 22,
                    "fileName": "022.mp3",
                    "size": 9502720,
                    "title": "Surat Al-Hajj"
                },
                {
                    "id": 23,
                    "fileName": "023.mp3",
                    "size": 7958528,
                    "title": "Surat Al-Mumenoon"
                },
                {
                    "id": 24,
                    "fileName": "024.mp3",
                    "size": 10502144,
                    "title": "Surat An-Noor"
                },
                {
                    "id": 25,
                    "fileName": "025.mp3",
                    "size": 6766592,
                    "title": "Surat Al-Furqan"
                },
                {
                    "id": 26,
                    "fileName": "026.mp3",
                    "size": 9596928,
                    "title": "Surat Ash-Shu'ara"
                },
                {
                    "id": 27,
                    "fileName": "027.mp3",
                    "size": 8519680,
                    "title": "Surat An-Naml"
                },
                {
                    "id": 28,
                    "fileName": "028.mp3",
                    "size": 10932224,
                    "title": "Surat Al-Qasas"
                },
                {
                    "id": 29,
                    "fileName": "029.mp3",
                    "size": 7229440,
                    "title": "Surat Al-Ankaboot"
                },
                {
                    "id": 30,
                    "fileName": "030.mp3",
                    "size": 5722112,
                    "title": "Surat Ar-Room"
                },
                {
                    "id": 31,
                    "fileName": "031.mp3",
                    "size": 4149248,
                    "title": "Surat Luqman"
                },
                {
                    "id": 32,
                    "fileName": "032.mp3",
                    "size": 2793472,
                    "title": "Surat As-Sajda"
                },
                {
                    "id": 33,
                    "fileName": "033.mp3",
                    "size": 11476992,
                    "title": "Surat Al-Ahzab"
                },
                {
                    "id": 34,
                    "fileName": "034.mp3",
                    "size": 6918144,
                    "title": "Surat Saba"
                },
                {
                    "id": 35,
                    "fileName": "035.mp3",
                    "size": 5570560,
                    "title": "Surat Fatir"
                },
                {
                    "id": 36,
                    "fileName": "036.mp3",
                    "size": 6049792,
                    "title": "Surat Ya-Seen"
                },
                {
                    "id": 37,
                    "fileName": "037.mp3",
                    "size": 6803456,
                    "title": "Surat As-Saaffat"
                },
                {
                    "id": 38,
                    "fileName": "038.mp3",
                    "size": 5525504,
                    "title": "Surat Sad"
                },
                {
                    "id": 39,
                    "fileName": "039.mp3",
                    "size": 9043968,
                    "title": "Surat Az-Zumar"
                },
                {
                    "id": 40,
                    "fileName": "040.mp3",
                    "size": 9658368,
                    "title": "Surat Al-Ghafir"
                },
                {
                    "id": 41,
                    "fileName": "041.mp3",
                    "size": 6119424,
                    "title": "Surat Fussilat"
                },
                {
                    "id": 42,
                    "fileName": "042.mp3",
                    "size": 7143424,
                    "title": "Surat Ash-Shura"
                },
                {
                    "id": 43,
                    "fileName": "043.mp3",
                    "size": 7684096,
                    "title": "Surat Az-Zukhruf"
                },
                {
                    "id": 44,
                    "fileName": "044.mp3",
                    "size": 3117056,
                    "title": "Surat Ad-Dukhan"
                },
                {
                    "id": 45,
                    "fileName": "045.mp3",
                    "size": 3997696,
                    "title": "Surat Al-Jathiya"
                },
                {
                    "id": 46,
                    "fileName": "046.mp3",
                    "size": 5066752,
                    "title": "Surat Al-Ahqaf"
                },
                {
                    "id": 47,
                    "fileName": "047.mp3",
                    "size": 4440064,
                    "title": "Surat Muhammad"
                },
                {
                    "id": 48,
                    "fileName": "048.mp3",
                    "size": 4636672,
                    "title": "Surat Al-Fath"
                },
                {
                    "id": 49,
                    "fileName": "049.mp3",
                    "size": 2961408,
                    "title": "Surat Al-Hujraat"
                },
                {
                    "id": 50,
                    "fileName": "050.mp3",
                    "size": 3526656,
                    "title": "Surat Qaf"
                },
                {
                    "id": 51,
                    "fileName": "051.mp3",
                    "size": 3239936,
                    "title": "Surat Adh-Dhariyat"
                },
                {
                    "id": 52,
                    "fileName": "052.mp3",
                    "size": 2703360,
                    "title": "Surat At-Tur"
                },
                {
                    "id": 53,
                    "fileName": "053.mp3",
                    "size": 3178496,
                    "title": "Surat An-Najm"
                },
                {
                    "id": 54,
                    "fileName": "054.mp3",
                    "size": 2772992,
                    "title": "Surat Al-Qamar"
                },
                {
                    "id": 55,
                    "fileName": "055.mp3",
                    "size": 3801088,
                    "title": "Surat Ar-Rahman"
                },
                {
                    "id": 56,
                    "fileName": "056.mp3",
                    "size": 3031040,
                    "title": "Surat Al-Waqia"
                },
                {
                    "id": 57,
                    "fileName": "057.mp3",
                    "size": 4222976,
                    "title": "Surat Al-Hadid"
                },
                {
                    "id": 58,
                    "fileName": "058.mp3",
                    "size": 3915776,
                    "title": "Surat Al-Mujadila"
                },
                {
                    "id": 59,
                    "fileName": "059.mp3",
                    "size": 3727360,
                    "title": "Surat Al-Hashr"
                },
                {
                    "id": 60,
                    "fileName": "060.mp3",
                    "size": 2940928,
                    "title": "Surat Al-Mumtahina"
                },
                {
                    "id": 61,
                    "fileName": "061.mp3",
                    "size": 1863680,
                    "title": "Surat As-Saff"
                },
                {
                    "id": 62,
                    "fileName": "062.mp3",
                    "size": 1454080,
                    "title": "Surat Al-Jumua"
                },
                {
                    "id": 63,
                    "fileName": "063.mp3",
                    "size": 1589248,
                    "title": "Surat Al-Munafiqoon"
                },
                {
                    "id": 64,
                    "fileName": "064.mp3",
                    "size": 1966080,
                    "title": "Surat At-Taghabun"
                },
                {
                    "id": 65,
                    "fileName": "065.mp3",
                    "size": 2306048,
                    "title": "Surat At-Talaq"
                },
                {
                    "id": 66,
                    "fileName": "066.mp3",
                    "size": 2256896,
                    "title": "Surat At-Tahrim"
                },
                {
                    "id": 67,
                    "fileName": "067.mp3",
                    "size": 2863104,
                    "title": "Surat Al-Mulk"
                },
                {
                    "id": 68,
                    "fileName": "068.mp3",
                    "size": 2641920,
                    "title": "Surat Al-Qalam"
                },
                {
                    "id": 69,
                    "fileName": "069.mp3",
                    "size": 2605056,
                    "title": "Surat Al-Haaqqa"
                },
                {
                    "id": 70,
                    "fileName": "070.mp3",
                    "size": 2322432,
                    "title": "Surat Al-Maarij"
                },
                {
                    "id": 71,
                    "fileName": "071.mp3",
                    "size": 2031616,
                    "title": "Surat Nooh"
                },
                {
                    "id": 72,
                    "fileName": "072.mp3",
                    "size": 2158592,
                    "title": "Surat Al-Jinn"
                },
                {
                    "id": 73,
                    "fileName": "073.mp3",
                    "size": 1634304,
                    "title": "Surat Al-Muzzammil"
                },
                {
                    "id": 74,
                    "fileName": "074.mp3",
                    "size": 2056192,
                    "title": "Surat Al-Muddaththir"
                },
                {
                    "id": 75,
                    "fileName": "075.mp3",
                    "size": 1286144,
                    "title": "Surat Al-Qiyama"
                },
                {
                    "id": 76,
                    "fileName": "076.mp3",
                    "size": 2007040,
                    "title": "Surat Al-Insan"
                },
                {
                    "id": 77,
                    "fileName": "077.mp3",
                    "size": 1662976,
                    "title": "Surat Al-Mursalat"
                },
                {
                    "id": 78,
                    "fileName": "078.mp3",
                    "size": 1691648,
                    "title": "Surat An-Naba"
                },
                {
                    "id": 79,
                    "fileName": "079.mp3",
                    "size": 1437696,
                    "title": "Surat An-Naziat"
                },
                {
                    "id": 80,
                    "fileName": "080.mp3",
                    "size": 1191936,
                    "title": "Surat Abasa"
                },
                {
                    "id": 81,
                    "fileName": "081.mp3",
                    "size": 819200,
                    "title": "Surat At-Takwir"
                },
                {
                    "id": 82,
                    "fileName": "082.mp3",
                    "size": 614400,
                    "title": "Surat Al-Infitar"
                },
                {
                    "id": 83,
                    "fileName": "083.mp3",
                    "size": 1359872,
                    "title": "Surat Al-Mutaffifin"
                },
                {
                    "id": 84,
                    "fileName": "084.mp3",
                    "size": 851968,
                    "title": "Surat Al-Inshiqaq"
                },
                {
                    "id": 85,
                    "fileName": "085.mp3",
                    "size": 880640,
                    "title": "Surat Al-Burooj"
                },
                {
                    "id": 86,
                    "fileName": "086.mp3",
                    "size": 561152,
                    "title": "Surat At-Tariq"
                },
                {
                    "id": 87,
                    "fileName": "087.mp3",
                    "size": 581632,
                    "title": "Surat Al-Ala"
                },
                {
                    "id": 88,
                    "fileName": "088.mp3",
                    "size": 811008,
                    "title": "Surat Al-Ghashiya"
                },
                {
                    "id": 89,
                    "fileName": "089.mp3",
                    "size": 1163264,
                    "title": "Surat Al-Fajr"
                },
                {
                    "id": 90,
                    "fileName": "090.mp3",
                    "size": 638976,
                    "title": "Surat Al-Balad"
                },
                {
                    "id": 91,
                    "fileName": "091.mp3",
                    "size": 487424,
                    "title": "Surat Ash-Shams"
                },
                {
                    "id": 92,
                    "fileName": "092.mp3",
                    "size": 618496,
                    "title": "Surat Al-Lail"
                },
                {
                    "id": 93,
                    "fileName": "093.mp3",
                    "size": 368640,
                    "title": "Surat Ad-Dhuha"
                },
                {
                    "id": 94,
                    "fileName": "094.mp3",
                    "size": 212992,
                    "title": "Surat Al-Inshirah"
                },
                {
                    "id": 95,
                    "fileName": "095.mp3",
                    "size": 303104,
                    "title": "Surat At-Tin"
                },
                {
                    "id": 96,
                    "fileName": "096.mp3",
                    "size": 565248,
                    "title": "Surat Al-Alaq"
                },
                {
                    "id": 97,
                    "fileName": "097.mp3",
                    "size": 258048,
                    "title": "Surat Al-Qadr"
                },
                {
                    "id": 98,
                    "fileName": "098.mp3",
                    "size": 749568,
                    "title": "Surat Al-Bayyina"
                },
                {
                    "id": 99,
                    "fileName": "099.mp3",
                    "size": 401408,
                    "title": "Surat Az-Zalzala"
                },
                {
                    "id": 100,
                    "fileName": "100.mp3",
                    "size": 450560,
                    "title": "Surat Al-Adiyat"
                },
                {
                    "id": 101,
                    "fileName": "101.mp3",
                    "size": 421888,
                    "title": "Surat Al-Qaria"
                },
                {
                    "id": 102,
                    "fileName": "102.mp3",
                    "size": 344064,
                    "title": "Surat At-Takathur"
                },
                {
                    "id": 103,
                    "fileName": "103.mp3",
                    "size": 208896,
                    "title": "Surat Al-Asr"
                },
                {
                    "id": 104,
                    "fileName": "104.mp3",
                    "size": 335872,
                    "title": "Surat Al-Humaza"
                },
                {
                    "id": 105,
                    "fileName": "105.mp3",
                    "size": 282624,
                    "title": "Surat Al-Fil"
                },
                {
                    "id": 106,
                    "fileName": "106.mp3",
                    "size": 245760,
                    "title": "Surat Quraish"
                },
                {
                    "id": 107,
                    "fileName": "107.mp3",
                    "size": 278528,
                    "title": "Surat Al-Maun"
                },
                {
                    "id": 108,
                    "fileName": "108.mp3",
                    "size": 139264,
                    "title": "Surat Al-Kauther"
                },
                {
                    "id": 109,
                    "fileName": "109.mp3",
                    "size": 245760,
                    "title": "Surat Al-Kafiroon"
                },
                {
                    "id": 110,
                    "fileName": "110.mp3",
                    "size": 212992,
                    "title": "Surat An-Nasr"
                },
                {
                    "id": 111,
                    "fileName": "111.mp3",
                    "size": 237568,
                    "title": "Surat Al-Masadd"
                },
                {
                    "id": 112,
                    "fileName": "112.mp3",
                    "size": 139264,
                    "title": "Surat Al-Ikhlas"
                },
                {
                    "id": 113,
                    "fileName": "113.mp3",
                    "size": 208896,
                    "title": "Surat Al-Falaq"
                },
                {
                    "id": 114,
                    "fileName": "114.mp3",
                    "size": 245760,
                    "title": "Surat An-Nas"
                }
            ]
        },
        {
            "id": 3,
            "name": "Saud Al-Shuraim",
            "bio": "Saud ibn Ibrahim ibn Muhammad al-Shuraim was born in January 19, 1964. He is one of the Imams and khateeb of the Grand Mosque Masjid al-Haram in Makkah. He holds a doctorate Ph.D and is a Professor of Sharia and Islamic studies at the Umm al-Qura University in Makkah, and was recently appointed as a Dean and 'Specialist Professor in Fiqh' at the University. He is also known as a researcher in figh, a judge, and a writer who has composed many books on aqeedah, fiqh, and Arabic poetry.",
            "path": "shuraim",
            "tracks": [
                {
                    "id": 1,
                    "fileName": "001.mp3",
                    "size": 303104,
                    "title": "Surat Al-Fatiha"
                },
                {
                    "id": 2,
                    "fileName": "002.mp3",
                    "size": 41779200,
                    "title": "Surat Al-Baqara"
                },
                {
                    "id": 3,
                    "fileName": "003.mp3",
                    "size": 22646784,
                    "title": "Surat Aal-E-Imran"
                },
                {
                    "id": 4,
                    "fileName": "004.mp3",
                    "size": 25100288,
                    "title": "Surat An-Nisa"
                },
                {
                    "id": 5,
                    "fileName": "005.mp3",
                    "size": 19042304,
                    "title": "Surat Al-Maeda"
                },
                {
                    "id": 6,
                    "fileName": "006.mp3",
                    "size": 20709376,
                    "title": "Surat Al-Anaam"
                },
                {
                    "id": 7,
                    "fileName": "007.mp3",
                    "size": 23154688,
                    "title": "Surat Al-Araf"
                },
                {
                    "id": 8,
                    "fileName": "008.mp3",
                    "size": 8704000,
                    "title": "Surat Al-Anfal"
                },
                {
                    "id": 9,
                    "fileName": "009.mp3",
                    "size": 17207296,
                    "title": "Surat At-Tawba"
                },
                {
                    "id": 10,
                    "fileName": "010.mp3",
                    "size": 11730944,
                    "title": "Surat Yunus"
                },
                {
                    "id": 11,
                    "fileName": "011.mp3",
                    "size": 12849152,
                    "title": "Surat Hud"
                },
                {
                    "id": 12,
                    "fileName": "012.mp3",
                    "size": 12132352,
                    "title": "Surat Yusuf"
                },
                {
                    "id": 13,
                    "fileName": "013.mp3",
                    "size": 6070272,
                    "title": "Surat Ar-Rad"
                },
                {
                    "id": 14,
                    "fileName": "014.mp3",
                    "size": 6148096,
                    "title": "Surat Ibrahim"
                },
                {
                    "id": 15,
                    "fileName": "015.mp3",
                    "size": 4571136,
                    "title": "Surat Al-Hijr"
                },
                {
                    "id": 16,
                    "fileName": "016.mp3",
                    "size": 12279808,
                    "title": "Surat An-Nahl"
                },
                {
                    "id": 17,
                    "fileName": "017.mp3",
                    "size": 10285056,
                    "title": "Surat Al-Isra"
                },
                {
                    "id": 18,
                    "fileName": "018.mp3",
                    "size": 10289152,
                    "title": "Surat Al-Kahf"
                },
                {
                    "id": 19,
                    "fileName": "019.mp3",
                    "size": 6168576,
                    "title": "Surat Maryam"
                },
                {
                    "id": 20,
                    "fileName": "020.mp3",
                    "size": 8187904,
                    "title": "Surat Ta-Ha"
                },
                {
                    "id": 21,
                    "fileName": "021.mp3",
                    "size": 7929856,
                    "title": "Surat Al-Anbiya"
                },
                {
                    "id": 22,
                    "fileName": "022.mp3",
                    "size": 7962624,
                    "title": "Surat Al-Hajj"
                },
                {
                    "id": 23,
                    "fileName": "023.mp3",
                    "size": 7172096,
                    "title": "Surat Al-Mumenoon"
                },
                {
                    "id": 24,
                    "fileName": "024.mp3",
                    "size": 8892416,
                    "title": "Surat An-Noor"
                },
                {
                    "id": 25,
                    "fileName": "025.mp3",
                    "size": 6148096,
                    "title": "Surat Al-Furqan"
                },
                {
                    "id": 26,
                    "fileName": "026.mp3",
                    "size": 9097216,
                    "title": "Surat Ash-Shu'ara"
                },
                {
                    "id": 27,
                    "fileName": "027.mp3",
                    "size": 7720960,
                    "title": "Surat An-Naml"
                },
                {
                    "id": 28,
                    "fileName": "028.mp3",
                    "size": 9535488,
                    "title": "Surat Al-Qasas"
                },
                {
                    "id": 29,
                    "fileName": "029.mp3",
                    "size": 6594560,
                    "title": "Surat Al-Ankaboot"
                },
                {
                    "id": 30,
                    "fileName": "030.mp3",
                    "size": 5279744,
                    "title": "Surat Ar-Room"
                },
                {
                    "id": 31,
                    "fileName": "031.mp3",
                    "size": 3432448,
                    "title": "Surat Luqman"
                },
                {
                    "id": 32,
                    "fileName": "032.mp3",
                    "size": 2387968,
                    "title": "Surat As-Sajda"
                },
                {
                    "id": 33,
                    "fileName": "033.mp3",
                    "size": 8757248,
                    "title": "Surat Al-Ahzab"
                },
                {
                    "id": 34,
                    "fileName": "034.mp3",
                    "size": 5668864,
                    "title": "Surat Saba"
                },
                {
                    "id": 35,
                    "fileName": "035.mp3",
                    "size": 5156864,
                    "title": "Surat Fatir"
                },
                {
                    "id": 36,
                    "fileName": "036.mp3",
                    "size": 4939776,
                    "title": "Surat Ya-Seen"
                },
                {
                    "id": 37,
                    "fileName": "037.mp3",
                    "size": 6127616,
                    "title": "Surat As-Saaffat"
                },
                {
                    "id": 38,
                    "fileName": "038.mp3",
                    "size": 5091328,
                    "title": "Surat Sad"
                },
                {
                    "id": 39,
                    "fileName": "039.mp3",
                    "size": 7831552,
                    "title": "Surat Az-Zumar"
                },
                {
                    "id": 40,
                    "fileName": "040.mp3",
                    "size": 7962624,
                    "title": "Surat Al-Ghafir"
                },
                {
                    "id": 41,
                    "fileName": "041.mp3",
                    "size": 5664768,
                    "title": "Surat Fussilat"
                },
                {
                    "id": 42,
                    "fileName": "042.mp3",
                    "size": 5488640,
                    "title": "Surat Ash-Shura"
                },
                {
                    "id": 43,
                    "fileName": "043.mp3",
                    "size": 5996544,
                    "title": "Surat Az-Zukhruf"
                },
                {
                    "id": 44,
                    "fileName": "044.mp3",
                    "size": 2772992,
                    "title": "Surat Ad-Dukhan"
                },
                {
                    "id": 45,
                    "fileName": "045.mp3",
                    "size": 3293184,
                    "title": "Surat Al-Jathiya"
                },
                {
                    "id": 46,
                    "fileName": "046.mp3",
                    "size": 4132864,
                    "title": "Surat Al-Ahqaf"
                },
                {
                    "id": 47,
                    "fileName": "047.mp3",
                    "size": 3645440,
                    "title": "Surat Muhammad"
                },
                {
                    "id": 48,
                    "fileName": "048.mp3",
                    "size": 4173824,
                    "title": "Surat Al-Fath"
                },
                {
                    "id": 49,
                    "fileName": "049.mp3",
                    "size": 2629632,
                    "title": "Surat Al-Hujraat"
                },
                {
                    "id": 50,
                    "fileName": "050.mp3",
                    "size": 2555904,
                    "title": "Surat Qaf"
                },
                {
                    "id": 51,
                    "fileName": "051.mp3",
                    "size": 2428928,
                    "title": "Surat Adh-Dhariyat"
                },
                {
                    "id": 52,
                    "fileName": "052.mp3",
                    "size": 2084864,
                    "title": "Surat At-Tur"
                },
                {
                    "id": 53,
                    "fileName": "053.mp3",
                    "size": 2314240,
                    "title": "Surat An-Najm"
                },
                {
                    "id": 54,
                    "fileName": "054.mp3",
                    "size": 2359296,
                    "title": "Surat Al-Qamar"
                },
                {
                    "id": 55,
                    "fileName": "055.mp3",
                    "size": 3002368,
                    "title": "Surat Ar-Rahman"
                },
                {
                    "id": 56,
                    "fileName": "056.mp3",
                    "size": 3174400,
                    "title": "Surat Al-Waqia"
                },
                {
                    "id": 57,
                    "fileName": "057.mp3",
                    "size": 3858432,
                    "title": "Surat Al-Hadid"
                },
                {
                    "id": 58,
                    "fileName": "058.mp3",
                    "size": 3379200,
                    "title": "Surat Al-Mujadila"
                },
                {
                    "id": 59,
                    "fileName": "059.mp3",
                    "size": 2879488,
                    "title": "Surat Al-Hashr"
                },
                {
                    "id": 60,
                    "fileName": "060.mp3",
                    "size": 2248704,
                    "title": "Surat Al-Mumtahina"
                },
                {
                    "id": 61,
                    "fileName": "061.mp3",
                    "size": 1413120,
                    "title": "Surat As-Saff"
                },
                {
                    "id": 62,
                    "fileName": "062.mp3",
                    "size": 1187840,
                    "title": "Surat Al-Jumua"
                },
                {
                    "id": 63,
                    "fileName": "063.mp3",
                    "size": 1359872,
                    "title": "Surat Al-Munafiqoon"
                },
                {
                    "id": 64,
                    "fileName": "064.mp3",
                    "size": 1642496,
                    "title": "Surat At-Taghabun"
                },
                {
                    "id": 65,
                    "fileName": "065.mp3",
                    "size": 1957888,
                    "title": "Surat At-Talaq"
                },
                {
                    "id": 66,
                    "fileName": "066.mp3",
                    "size": 1806336,
                    "title": "Surat At-Tahrim"
                },
                {
                    "id": 67,
                    "fileName": "067.mp3",
                    "size": 2187264,
                    "title": "Surat Al-Mulk"
                },
                {
                    "id": 68,
                    "fileName": "068.mp3",
                    "size": 2162688,
                    "title": "Surat Al-Qalam"
                },
                {
                    "id": 69,
                    "fileName": "069.mp3",
                    "size": 2142208,
                    "title": "Surat Al-Haaqqa"
                },
                {
                    "id": 70,
                    "fileName": "070.mp3",
                    "size": 1605632,
                    "title": "Surat Al-Maarij"
                },
                {
                    "id": 71,
                    "fileName": "071.mp3",
                    "size": 1548288,
                    "title": "Surat Nooh"
                },
                {
                    "id": 72,
                    "fileName": "072.mp3",
                    "size": 1830912,
                    "title": "Surat Al-Jinn"
                },
                {
                    "id": 73,
                    "fileName": "073.mp3",
                    "size": 1368064,
                    "title": "Surat Al-Muzzammil"
                },
                {
                    "id": 74,
                    "fileName": "074.mp3",
                    "size": 1781760,
                    "title": "Surat Al-Muddaththir"
                },
                {
                    "id": 75,
                    "fileName": "075.mp3",
                    "size": 1110016,
                    "title": "Surat Al-Qiyama"
                },
                {
                    "id": 76,
                    "fileName": "076.mp3",
                    "size": 1765376,
                    "title": "Surat Al-Insan"
                },
                {
                    "id": 77,
                    "fileName": "077.mp3",
                    "size": 1417216,
                    "title": "Surat Al-Mursalat"
                },
                {
                    "id": 78,
                    "fileName": "078.mp3",
                    "size": 1417216,
                    "title": "Surat An-Naba"
                },
                {
                    "id": 79,
                    "fileName": "079.mp3",
                    "size": 1298432,
                    "title": "Surat An-Naziat"
                },
                {
                    "id": 80,
                    "fileName": "080.mp3",
                    "size": 1052672,
                    "title": "Surat Abasa"
                },
                {
                    "id": 81,
                    "fileName": "081.mp3",
                    "size": 843776,
                    "title": "Surat At-Takwir"
                },
                {
                    "id": 82,
                    "fileName": "082.mp3",
                    "size": 561152,
                    "title": "Surat Al-Infitar"
                },
                {
                    "id": 83,
                    "fileName": "083.mp3",
                    "size": 1212416,
                    "title": "Surat Al-Mutaffifin"
                },
                {
                    "id": 84,
                    "fileName": "084.mp3",
                    "size": 737280,
                    "title": "Surat Al-Inshiqaq"
                },
                {
                    "id": 85,
                    "fileName": "085.mp3",
                    "size": 724992,
                    "title": "Surat Al-Burooj"
                },
                {
                    "id": 86,
                    "fileName": "086.mp3",
                    "size": 442368,
                    "title": "Surat At-Tariq"
                },
                {
                    "id": 87,
                    "fileName": "087.mp3",
                    "size": 499712,
                    "title": "Surat Al-Ala"
                },
                {
                    "id": 88,
                    "fileName": "088.mp3",
                    "size": 598016,
                    "title": "Surat Al-Ghashiya"
                },
                {
                    "id": 89,
                    "fileName": "089.mp3",
                    "size": 987136,
                    "title": "Surat Al-Fajr"
                },
                {
                    "id": 90,
                    "fileName": "090.mp3",
                    "size": 512000,
                    "title": "Surat Al-Balad"
                },
                {
                    "id": 91,
                    "fileName": "091.mp3",
                    "size": 401408,
                    "title": "Surat Ash-Shams"
                },
                {
                    "id": 92,
                    "fileName": "092.mp3",
                    "size": 487424,
                    "title": "Surat Al-Lail"
                },
                {
                    "id": 93,
                    "fileName": "093.mp3",
                    "size": 299008,
                    "title": "Surat Ad-Dhuha"
                },
                {
                    "id": 94,
                    "fileName": "094.mp3",
                    "size": 180224,
                    "title": "Surat Al-Inshirah"
                },
                {
                    "id": 95,
                    "fileName": "095.mp3",
                    "size": 258048,
                    "title": "Surat At-Tin"
                },
                {
                    "id": 96,
                    "fileName": "096.mp3",
                    "size": 450560,
                    "title": "Surat Al-Alaq"
                },
                {
                    "id": 97,
                    "fileName": "097.mp3",
                    "size": 184320,
                    "title": "Surat Al-Qadr"
                },
                {
                    "id": 98,
                    "fileName": "098.mp3",
                    "size": 581632,
                    "title": "Surat Al-Bayyina"
                },
                {
                    "id": 99,
                    "fileName": "099.mp3",
                    "size": 286720,
                    "title": "Surat Az-Zalzala"
                },
                {
                    "id": 100,
                    "fileName": "100.mp3",
                    "size": 327680,
                    "title": "Surat Al-Adiyat"
                },
                {
                    "id": 101,
                    "fileName": "101.mp3",
                    "size": 278528,
                    "title": "Surat Al-Qaria"
                },
                {
                    "id": 102,
                    "fileName": "102.mp3",
                    "size": 233472,
                    "title": "Surat At-Takathur"
                },
                {
                    "id": 103,
                    "fileName": "103.mp3",
                    "size": 126976,
                    "title": "Surat Al-Asr"
                },
                {
                    "id": 104,
                    "fileName": "104.mp3",
                    "size": 258048,
                    "title": "Surat Al-Humaza"
                },
                {
                    "id": 105,
                    "fileName": "105.mp3",
                    "size": 192512,
                    "title": "Surat Al-Fil"
                },
                {
                    "id": 106,
                    "fileName": "106.mp3",
                    "size": 159744,
                    "title": "Surat Quraish"
                },
                {
                    "id": 107,
                    "fileName": "107.mp3",
                    "size": 212992,
                    "title": "Surat Al-Maun"
                },
                {
                    "id": 108,
                    "fileName": "108.mp3",
                    "size": 98304,
                    "title": "Surat Al-Kauther"
                },
                {
                    "id": 109,
                    "fileName": "109.mp3",
                    "size": 188416,
                    "title": "Surat Al-Kafiroon"
                },
                {
                    "id": 110,
                    "fileName": "110.mp3",
                    "size": 155648,
                    "title": "Surat An-Nasr"
                },
                {
                    "id": 111,
                    "fileName": "111.mp3",
                    "size": 176128,
                    "title": "Surat Al-Masadd"
                },
                {
                    "id": 112,
                    "fileName": "112.mp3",
                    "size": 102400,
                    "title": "Surat Al-Ikhlas"
                },
                {
                    "id": 113,
                    "fileName": "113.mp3",
                    "size": 151552,
                    "title": "Surat Al-Falaq"
                },
                {
                    "id": 114,
                    "fileName": "114.mp3",
                    "size": 192512,
                    "title": "Surat An-Nas"
                }
            ]
        },
        {
            "id": 4,
            "name": "Saad Al Ghamidi",
            "bio": "Saad Al Ghamidi was born Dammam, Saudi Arabia in 1967. He is a Quran reciter, a scholar and an imam. He memorized the entire Quranic texts in 1990 when he was 22 years old. He is often noted for his acclaimed Tajweed. He learned the Islamic law in Dammam, particularly in the school of sharia, the source of Muslim religious commandments.",
            "path": "ghamidi",
            "tracks": [
                {
                    "id": 1,
                    "fileName": "001.mp3",
                    "size": 376832,
                    "title": "Surat Al-Fatiha"
                },
                {
                    "id": 2,
                    "fileName": "002.mp3",
                    "size": 56434688,
                    "title": "Surat Al-Baqara"
                },
                {
                    "id": 3,
                    "fileName": "003.mp3",
                    "size": 31485952,
                    "title": "Surat Aal-E-Imran"
                },
                {
                    "id": 4,
                    "fileName": "004.mp3",
                    "size": 35102720,
                    "title": "Surat An-Nisa"
                },
                {
                    "id": 5,
                    "fileName": "005.mp3",
                    "size": 24145920,
                    "title": "Surat Al-Maeda"
                },
                {
                    "id": 6,
                    "fileName": "006.mp3",
                    "size": 26681344,
                    "title": "Surat Al-Anaam"
                },
                {
                    "id": 7,
                    "fileName": "007.mp3",
                    "size": 30838784,
                    "title": "Surat Al-Araf"
                },
                {
                    "id": 8,
                    "fileName": "008.mp3",
                    "size": 10842112,
                    "title": "Surat Al-Anfal"
                },
                {
                    "id": 9,
                    "fileName": "009.mp3",
                    "size": 23465984,
                    "title": "Surat At-Tawba"
                },
                {
                    "id": 10,
                    "fileName": "010.mp3",
                    "size": 16965632,
                    "title": "Surat Yunus"
                },
                {
                    "id": 11,
                    "fileName": "011.mp3",
                    "size": 17260544,
                    "title": "Surat Hud"
                },
                {
                    "id": 12,
                    "fileName": "012.mp3",
                    "size": 15486976,
                    "title": "Surat Yusuf"
                },
                {
                    "id": 13,
                    "fileName": "013.mp3",
                    "size": 7184384,
                    "title": "Surat Ar-Rad"
                },
                {
                    "id": 14,
                    "fileName": "014.mp3",
                    "size": 8593408,
                    "title": "Surat Ibrahim"
                },
                {
                    "id": 15,
                    "fileName": "015.mp3",
                    "size": 6696960,
                    "title": "Surat Al-Hijr"
                },
                {
                    "id": 16,
                    "fileName": "016.mp3",
                    "size": 16408576,
                    "title": "Surat An-Nahl"
                },
                {
                    "id": 17,
                    "fileName": "017.mp3",
                    "size": 13926400,
                    "title": "Surat Al-Isra"
                },
                {
                    "id": 18,
                    "fileName": "018.mp3",
                    "size": 14057472,
                    "title": "Surat Al-Kahf"
                },
                {
                    "id": 19,
                    "fileName": "019.mp3",
                    "size": 8450048,
                    "title": "Surat Maryam"
                },
                {
                    "id": 20,
                    "fileName": "020.mp3",
                    "size": 10895360,
                    "title": "Surat Ta-Ha"
                },
                {
                    "id": 21,
                    "fileName": "021.mp3",
                    "size": 12095488,
                    "title": "Surat Al-Anbiya"
                },
                {
                    "id": 22,
                    "fileName": "022.mp3",
                    "size": 11956224,
                    "title": "Surat Al-Hajj"
                },
                {
                    "id": 23,
                    "fileName": "023.mp3",
                    "size": 10551296,
                    "title": "Surat Al-Mumenoon"
                },
                {
                    "id": 24,
                    "fileName": "024.mp3",
                    "size": 12709888,
                    "title": "Surat An-Noor"
                },
                {
                    "id": 25,
                    "fileName": "025.mp3",
                    "size": 7987200,
                    "title": "Surat Al-Furqan"
                },
                {
                    "id": 26,
                    "fileName": "026.mp3",
                    "size": 11358208,
                    "title": "Surat Ash-Shu'ara"
                },
                {
                    "id": 27,
                    "fileName": "027.mp3",
                    "size": 11345920,
                    "title": "Surat An-Naml"
                },
                {
                    "id": 28,
                    "fileName": "028.mp3",
                    "size": 11870208,
                    "title": "Surat Al-Qasas"
                },
                {
                    "id": 29,
                    "fileName": "029.mp3",
                    "size": 9592832,
                    "title": "Surat Al-Ankaboot"
                },
                {
                    "id": 30,
                    "fileName": "030.mp3",
                    "size": 7106560,
                    "title": "Surat Ar-Room"
                },
                {
                    "id": 31,
                    "fileName": "031.mp3",
                    "size": 4542464,
                    "title": "Surat Luqman"
                },
                {
                    "id": 32,
                    "fileName": "032.mp3",
                    "size": 3436544,
                    "title": "Surat As-Sajda"
                },
                {
                    "id": 33,
                    "fileName": "033.mp3",
                    "size": 12288000,
                    "title": "Surat Al-Ahzab"
                },
                {
                    "id": 34,
                    "fileName": "034.mp3",
                    "size": 8138752,
                    "title": "Surat Saba"
                },
                {
                    "id": 35,
                    "fileName": "035.mp3",
                    "size": 6901760,
                    "title": "Surat Fatir"
                },
                {
                    "id": 36,
                    "fileName": "036.mp3",
                    "size": 6316032,
                    "title": "Surat Ya-Seen"
                },
                {
                    "id": 37,
                    "fileName": "037.mp3",
                    "size": 8552448,
                    "title": "Surat As-Saaffat"
                },
                {
                    "id": 38,
                    "fileName": "038.mp3",
                    "size": 7057408,
                    "title": "Surat Sad"
                },
                {
                    "id": 39,
                    "fileName": "039.mp3",
                    "size": 11313152,
                    "title": "Surat Az-Zumar"
                },
                {
                    "id": 40,
                    "fileName": "040.mp3",
                    "size": 10686464,
                    "title": "Surat Al-Ghafir"
                },
                {
                    "id": 41,
                    "fileName": "041.mp3",
                    "size": 7376896,
                    "title": "Surat Fussilat"
                },
                {
                    "id": 42,
                    "fileName": "042.mp3",
                    "size": 7417856,
                    "title": "Surat Ash-Shura"
                },
                {
                    "id": 43,
                    "fileName": "043.mp3",
                    "size": 8015872,
                    "title": "Surat Az-Zukhruf"
                },
                {
                    "id": 44,
                    "fileName": "044.mp3",
                    "size": 3301376,
                    "title": "Surat Ad-Dukhan"
                },
                {
                    "id": 45,
                    "fileName": "045.mp3",
                    "size": 4321280,
                    "title": "Surat Al-Jathiya"
                },
                {
                    "id": 46,
                    "fileName": "046.mp3",
                    "size": 5734400,
                    "title": "Surat Al-Ahqaf"
                },
                {
                    "id": 47,
                    "fileName": "047.mp3",
                    "size": 4730880,
                    "title": "Surat Muhammad"
                },
                {
                    "id": 48,
                    "fileName": "048.mp3",
                    "size": 4972544,
                    "title": "Surat Al-Fath"
                },
                {
                    "id": 49,
                    "fileName": "049.mp3",
                    "size": 3117056,
                    "title": "Surat Al-Hujraat"
                },
                {
                    "id": 50,
                    "fileName": "050.mp3",
                    "size": 3502080,
                    "title": "Surat Qaf"
                },
                {
                    "id": 51,
                    "fileName": "051.mp3",
                    "size": 3325952,
                    "title": "Surat Adh-Dhariyat"
                },
                {
                    "id": 52,
                    "fileName": "052.mp3",
                    "size": 2912256,
                    "title": "Surat At-Tur"
                },
                {
                    "id": 53,
                    "fileName": "053.mp3",
                    "size": 3444736,
                    "title": "Surat An-Najm"
                },
                {
                    "id": 54,
                    "fileName": "054.mp3",
                    "size": 3174400,
                    "title": "Surat Al-Qamar"
                },
                {
                    "id": 55,
                    "fileName": "055.mp3",
                    "size": 4091904,
                    "title": "Surat Ar-Rahman"
                },
                {
                    "id": 56,
                    "fileName": "056.mp3",
                    "size": 4026368,
                    "title": "Surat Al-Waqia"
                },
                {
                    "id": 57,
                    "fileName": "057.mp3",
                    "size": 5410816,
                    "title": "Surat Al-Hadid"
                },
                {
                    "id": 58,
                    "fileName": "058.mp3",
                    "size": 4227072,
                    "title": "Surat Al-Mujadila"
                },
                {
                    "id": 59,
                    "fileName": "059.mp3",
                    "size": 4022272,
                    "title": "Surat Al-Hashr"
                },
                {
                    "id": 60,
                    "fileName": "060.mp3",
                    "size": 3350528,
                    "title": "Surat Al-Mumtahina"
                },
                {
                    "id": 61,
                    "fileName": "061.mp3",
                    "size": 2007040,
                    "title": "Surat As-Saff"
                },
                {
                    "id": 62,
                    "fileName": "062.mp3",
                    "size": 1527808,
                    "title": "Surat Al-Jumua"
                },
                {
                    "id": 63,
                    "fileName": "063.mp3",
                    "size": 1601536,
                    "title": "Surat Al-Munafiqoon"
                },
                {
                    "id": 64,
                    "fileName": "064.mp3",
                    "size": 2166784,
                    "title": "Surat At-Taghabun"
                },
                {
                    "id": 65,
                    "fileName": "065.mp3",
                    "size": 2564096,
                    "title": "Surat At-Talaq"
                },
                {
                    "id": 66,
                    "fileName": "066.mp3",
                    "size": 2330624,
                    "title": "Surat At-Tahrim"
                },
                {
                    "id": 67,
                    "fileName": "067.mp3",
                    "size": 3076096,
                    "title": "Surat Al-Mulk"
                },
                {
                    "id": 68,
                    "fileName": "068.mp3",
                    "size": 2863104,
                    "title": "Surat Al-Qalam"
                },
                {
                    "id": 69,
                    "fileName": "069.mp3",
                    "size": 2650112,
                    "title": "Surat Al-Haaqqa"
                },
                {
                    "id": 70,
                    "fileName": "070.mp3",
                    "size": 2236416,
                    "title": "Surat Al-Maarij"
                },
                {
                    "id": 71,
                    "fileName": "071.mp3",
                    "size": 2097152,
                    "title": "Surat Nooh"
                },
                {
                    "id": 72,
                    "fileName": "072.mp3",
                    "size": 2441216,
                    "title": "Surat Al-Jinn"
                },
                {
                    "id": 73,
                    "fileName": "073.mp3",
                    "size": 1880064,
                    "title": "Surat Al-Muzzammil"
                },
                {
                    "id": 74,
                    "fileName": "074.mp3",
                    "size": 2400256,
                    "title": "Surat Al-Muddaththir"
                },
                {
                    "id": 75,
                    "fileName": "075.mp3",
                    "size": 1445888,
                    "title": "Surat Al-Qiyama"
                },
                {
                    "id": 76,
                    "fileName": "076.mp3",
                    "size": 2285568,
                    "title": "Surat Al-Insan"
                },
                {
                    "id": 77,
                    "fileName": "077.mp3",
                    "size": 1941504,
                    "title": "Surat Al-Mursalat"
                },
                {
                    "id": 78,
                    "fileName": "078.mp3",
                    "size": 1916928,
                    "title": "Surat An-Naba"
                },
                {
                    "id": 79,
                    "fileName": "079.mp3",
                    "size": 1761280,
                    "title": "Surat An-Naziat"
                },
                {
                    "id": 80,
                    "fileName": "080.mp3",
                    "size": 1482752,
                    "title": "Surat Abasa"
                },
                {
                    "id": 81,
                    "fileName": "081.mp3",
                    "size": 991232,
                    "title": "Surat At-Takwir"
                },
                {
                    "id": 82,
                    "fileName": "082.mp3",
                    "size": 811008,
                    "title": "Surat Al-Infitar"
                },
                {
                    "id": 83,
                    "fileName": "083.mp3",
                    "size": 1814528,
                    "title": "Surat Al-Mutaffifin"
                },
                {
                    "id": 84,
                    "fileName": "084.mp3",
                    "size": 1015808,
                    "title": "Surat Al-Inshiqaq"
                },
                {
                    "id": 85,
                    "fileName": "085.mp3",
                    "size": 1105920,
                    "title": "Surat Al-Burooj"
                },
                {
                    "id": 86,
                    "fileName": "086.mp3",
                    "size": 606208,
                    "title": "Surat At-Tariq"
                },
                {
                    "id": 87,
                    "fileName": "087.mp3",
                    "size": 643072,
                    "title": "Surat Al-Ala"
                },
                {
                    "id": 88,
                    "fileName": "088.mp3",
                    "size": 905216,
                    "title": "Surat Al-Ghashiya"
                },
                {
                    "id": 89,
                    "fileName": "089.mp3",
                    "size": 1376256,
                    "title": "Surat Al-Fajr"
                },
                {
                    "id": 90,
                    "fileName": "090.mp3",
                    "size": 761856,
                    "title": "Surat Al-Balad"
                },
                {
                    "id": 91,
                    "fileName": "091.mp3",
                    "size": 569344,
                    "title": "Surat Ash-Shams"
                },
                {
                    "id": 92,
                    "fileName": "092.mp3",
                    "size": 737280,
                    "title": "Surat Al-Lail"
                },
                {
                    "id": 93,
                    "fileName": "093.mp3",
                    "size": 425984,
                    "title": "Surat Ad-Dhuha"
                },
                {
                    "id": 94,
                    "fileName": "094.mp3",
                    "size": 253952,
                    "title": "Surat Al-Inshirah"
                },
                {
                    "id": 95,
                    "fileName": "095.mp3",
                    "size": 385024,
                    "title": "Surat At-Tin"
                },
                {
                    "id": 96,
                    "fileName": "096.mp3",
                    "size": 651264,
                    "title": "Surat Al-Alaq"
                },
                {
                    "id": 97,
                    "fileName": "097.mp3",
                    "size": 290816,
                    "title": "Surat Al-Qadr"
                },
                {
                    "id": 98,
                    "fileName": "098.mp3",
                    "size": 888832,
                    "title": "Surat Al-Bayyina"
                },
                {
                    "id": 99,
                    "fileName": "099.mp3",
                    "size": 380928,
                    "title": "Surat Az-Zalzala"
                },
                {
                    "id": 100,
                    "fileName": "100.mp3",
                    "size": 450560,
                    "title": "Surat Al-Adiyat"
                },
                {
                    "id": 101,
                    "fileName": "101.mp3",
                    "size": 397312,
                    "title": "Surat Al-Qaria"
                },
                {
                    "id": 102,
                    "fileName": "102.mp3",
                    "size": 348160,
                    "title": "Surat At-Takathur"
                },
                {
                    "id": 103,
                    "fileName": "103.mp3",
                    "size": 167936,
                    "title": "Surat Al-Asr"
                },
                {
                    "id": 104,
                    "fileName": "104.mp3",
                    "size": 352256,
                    "title": "Surat Al-Humaza"
                },
                {
                    "id": 105,
                    "fileName": "105.mp3",
                    "size": 253952,
                    "title": "Surat Al-Fil"
                },
                {
                    "id": 106,
                    "fileName": "106.mp3",
                    "size": 245760,
                    "title": "Surat Quraish"
                },
                {
                    "id": 107,
                    "fileName": "107.mp3",
                    "size": 319488,
                    "title": "Surat Al-Maun"
                },
                {
                    "id": 108,
                    "fileName": "108.mp3",
                    "size": 139264,
                    "title": "Surat Al-Kauther"
                },
                {
                    "id": 109,
                    "fileName": "109.mp3",
                    "size": 311296,
                    "title": "Surat Al-Kafiroon"
                },
                {
                    "id": 110,
                    "fileName": "110.mp3",
                    "size": 217088,
                    "title": "Surat An-Nasr"
                },
                {
                    "id": 111,
                    "fileName": "111.mp3",
                    "size": 249856,
                    "title": "Surat Al-Masadd"
                },
                {
                    "id": 112,
                    "fileName": "112.mp3",
                    "size": 131072,
                    "title": "Surat Al-Ikhlas"
                },
                {
                    "id": 113,
                    "fileName": "113.mp3",
                    "size": 221184,
                    "title": "Surat Al-Falaq"
                },
                {
                    "id": 114,
                    "fileName": "114.mp3",
                    "size": 278528,
                    "title": "Surat An-Nas"
                }
            ]
        },
        {
            "id": 5,
            "name": "Sheikh Abu Bakr Shatri",
            "bio": "Sheikh Abu Bakr Shatri is regarded as the fifth most beautiful and famous Quran reciter in the world. This renowned Quran reciter born in 1970 at Jeddah which is a famous city of Saudi Arabia and is included in the list of the best Imams and Quran reciters of Saudi Arabia. He has best and beautiful voice . He got many awards. Abu Bakr Al Shatri has get up his early education from Jeddah. He passed his graduation in (Holy Quran Studies) from Sheikh Aymane Rochdi Suwaid in 1416 Hijri and then he completed his master of accountancy after four years later.",
            "path": "shatri",
            "tracks": [
                {
                    "id": 1,
                    "fileName": "001.mp3",
                    "size": 503808,
                    "title": "Surat Al-Fatiha"
                },
                {
                    "id": 2,
                    "fileName": "002.mp3",
                    "size": 56680448,
                    "title": "Surat Al-Baqara"
                },
                {
                    "id": 3,
                    "fileName": "003.mp3",
                    "size": 33513472,
                    "title": "Surat Aal-E-Imran"
                },
                {
                    "id": 4,
                    "fileName": "004.mp3",
                    "size": 35143680,
                    "title": "Surat An-Nisa"
                },
                {
                    "id": 5,
                    "fileName": "005.mp3",
                    "size": 26914816,
                    "title": "Surat Al-Maeda"
                },
                {
                    "id": 6,
                    "fileName": "006.mp3",
                    "size": 28020736,
                    "title": "Surat Al-Anaam"
                },
                {
                    "id": 7,
                    "fileName": "007.mp3",
                    "size": 32432128,
                    "title": "Surat Al-Araf"
                },
                {
                    "id": 8,
                    "fileName": "008.mp3",
                    "size": 12148736,
                    "title": "Surat Al-Anfal"
                },
                {
                    "id": 9,
                    "fileName": "009.mp3",
                    "size": 24514560,
                    "title": "Surat At-Tawba"
                },
                {
                    "id": 10,
                    "fileName": "010.mp3",
                    "size": 18231296,
                    "title": "Surat Yunus"
                },
                {
                    "id": 11,
                    "fileName": "011.mp3",
                    "size": 19263488,
                    "title": "Surat Hud"
                },
                {
                    "id": 12,
                    "fileName": "012.mp3",
                    "size": 18284544,
                    "title": "Surat Yusuf"
                },
                {
                    "id": 13,
                    "fileName": "013.mp3",
                    "size": 7888896,
                    "title": "Surat Ar-Rad"
                },
                {
                    "id": 14,
                    "fileName": "014.mp3",
                    "size": 8409088,
                    "title": "Surat Ibrahim"
                },
                {
                    "id": 15,
                    "fileName": "015.mp3",
                    "size": 7340032,
                    "title": "Surat Al-Hijr"
                },
                {
                    "id": 16,
                    "fileName": "016.mp3",
                    "size": 16945152,
                    "title": "Surat An-Nahl"
                },
                {
                    "id": 17,
                    "fileName": "017.mp3",
                    "size": 13950976,
                    "title": "Surat Al-Isra"
                },
                {
                    "id": 18,
                    "fileName": "018.mp3",
                    "size": 14647296,
                    "title": "Surat Al-Kahf"
                },
                {
                    "id": 19,
                    "fileName": "019.mp3",
                    "size": 8904704,
                    "title": "Surat Maryam"
                },
                {
                    "id": 20,
                    "fileName": "020.mp3",
                    "size": 12750848,
                    "title": "Surat Ta-Ha"
                },
                {
                    "id": 21,
                    "fileName": "021.mp3",
                    "size": 11620352,
                    "title": "Surat Al-Anbiya"
                },
                {
                    "id": 22,
                    "fileName": "022.mp3",
                    "size": 12840960,
                    "title": "Surat Al-Hajj"
                },
                {
                    "id": 23,
                    "fileName": "023.mp3",
                    "size": 10260480,
                    "title": "Surat Al-Mumenoon"
                },
                {
                    "id": 24,
                    "fileName": "024.mp3",
                    "size": 13012992,
                    "title": "Surat An-Noor"
                },
                {
                    "id": 25,
                    "fileName": "025.mp3",
                    "size": 9183232,
                    "title": "Surat Al-Furqan"
                },
                {
                    "id": 26,
                    "fileName": "026.mp3",
                    "size": 12673024,
                    "title": "Surat Ash-Shu'ara"
                },
                {
                    "id": 27,
                    "fileName": "027.mp3",
                    "size": 11362304,
                    "title": "Surat An-Naml"
                },
                {
                    "id": 28,
                    "fileName": "028.mp3",
                    "size": 14798848,
                    "title": "Surat Al-Qasas"
                },
                {
                    "id": 29,
                    "fileName": "029.mp3",
                    "size": 9674752,
                    "title": "Surat Al-Ankaboot"
                },
                {
                    "id": 30,
                    "fileName": "030.mp3",
                    "size": 7639040,
                    "title": "Surat Ar-Room"
                },
                {
                    "id": 31,
                    "fileName": "031.mp3",
                    "size": 4780032,
                    "title": "Surat Luqman"
                },
                {
                    "id": 32,
                    "fileName": "032.mp3",
                    "size": 3477504,
                    "title": "Surat As-Sajda"
                },
                {
                    "id": 33,
                    "fileName": "033.mp3",
                    "size": 12480512,
                    "title": "Surat Al-Ahzab"
                },
                {
                    "id": 34,
                    "fileName": "034.mp3",
                    "size": 8134656,
                    "title": "Surat Saba"
                },
                {
                    "id": 35,
                    "fileName": "035.mp3",
                    "size": 7094272,
                    "title": "Surat Fatir"
                },
                {
                    "id": 36,
                    "fileName": "036.mp3",
                    "size": 6811648,
                    "title": "Surat Ya-Seen"
                },
                {
                    "id": 37,
                    "fileName": "037.mp3",
                    "size": 10985472,
                    "title": "Surat As-Saaffat"
                },
                {
                    "id": 38,
                    "fileName": "038.mp3",
                    "size": 7172096,
                    "title": "Surat Sad"
                },
                {
                    "id": 39,
                    "fileName": "039.mp3",
                    "size": 10883072,
                    "title": "Surat Az-Zumar"
                },
                {
                    "id": 40,
                    "fileName": "040.mp3",
                    "size": 12054528,
                    "title": "Surat Al-Ghafir"
                },
                {
                    "id": 41,
                    "fileName": "041.mp3",
                    "size": 7942144,
                    "title": "Surat Fussilat"
                },
                {
                    "id": 42,
                    "fileName": "042.mp3",
                    "size": 7917568,
                    "title": "Surat Ash-Shura"
                },
                {
                    "id": 43,
                    "fileName": "043.mp3",
                    "size": 8404992,
                    "title": "Surat Az-Zukhruf"
                },
                {
                    "id": 44,
                    "fileName": "044.mp3",
                    "size": 3977216,
                    "title": "Surat Ad-Dukhan"
                },
                {
                    "id": 45,
                    "fileName": "045.mp3",
                    "size": 4718592,
                    "title": "Surat Al-Jathiya"
                },
                {
                    "id": 46,
                    "fileName": "046.mp3",
                    "size": 6275072,
                    "title": "Surat Al-Ahqaf"
                },
                {
                    "id": 47,
                    "fileName": "047.mp3",
                    "size": 4984832,
                    "title": "Surat Muhammad"
                },
                {
                    "id": 48,
                    "fileName": "048.mp3",
                    "size": 5206016,
                    "title": "Surat Al-Fath"
                },
                {
                    "id": 49,
                    "fileName": "049.mp3",
                    "size": 3428352,
                    "title": "Surat Al-Hujraat"
                },
                {
                    "id": 50,
                    "fileName": "050.mp3",
                    "size": 4616192,
                    "title": "Surat Qaf"
                },
                {
                    "id": 51,
                    "fileName": "051.mp3",
                    "size": 3100672,
                    "title": "Surat Adh-Dhariyat"
                },
                {
                    "id": 52,
                    "fileName": "052.mp3",
                    "size": 2879488,
                    "title": "Surat At-Tur"
                },
                {
                    "id": 53,
                    "fileName": "053.mp3",
                    "size": 3055616,
                    "title": "Surat An-Najm"
                },
                {
                    "id": 54,
                    "fileName": "054.mp3",
                    "size": 3125248,
                    "title": "Surat Al-Qamar"
                },
                {
                    "id": 55,
                    "fileName": "055.mp3",
                    "size": 4009984,
                    "title": "Surat Ar-Rahman"
                },
                {
                    "id": 56,
                    "fileName": "056.mp3",
                    "size": 3772416,
                    "title": "Surat Al-Waqia"
                },
                {
                    "id": 57,
                    "fileName": "057.mp3",
                    "size": 5046272,
                    "title": "Surat Al-Hadid"
                },
                {
                    "id": 58,
                    "fileName": "058.mp3",
                    "size": 4771840,
                    "title": "Surat Al-Mujadila"
                },
                {
                    "id": 59,
                    "fileName": "059.mp3",
                    "size": 4247552,
                    "title": "Surat Al-Hashr"
                },
                {
                    "id": 60,
                    "fileName": "060.mp3",
                    "size": 3416064,
                    "title": "Surat Al-Mumtahina"
                },
                {
                    "id": 61,
                    "fileName": "061.mp3",
                    "size": 2154496,
                    "title": "Surat As-Saff"
                },
                {
                    "id": 62,
                    "fileName": "062.mp3",
                    "size": 1564672,
                    "title": "Surat Al-Jumua"
                },
                {
                    "id": 63,
                    "fileName": "063.mp3",
                    "size": 1753088,
                    "title": "Surat Al-Munafiqoon"
                },
                {
                    "id": 64,
                    "fileName": "064.mp3",
                    "size": 2166784,
                    "title": "Surat At-Taghabun"
                },
                {
                    "id": 65,
                    "fileName": "065.mp3",
                    "size": 3051520,
                    "title": "Surat At-Talaq"
                },
                {
                    "id": 66,
                    "fileName": "066.mp3",
                    "size": 2564096,
                    "title": "Surat At-Tahrim"
                },
                {
                    "id": 67,
                    "fileName": "067.mp3",
                    "size": 3125248,
                    "title": "Surat Al-Mulk"
                },
                {
                    "id": 68,
                    "fileName": "068.mp3",
                    "size": 2875392,
                    "title": "Surat Al-Qalam"
                },
                {
                    "id": 69,
                    "fileName": "069.mp3",
                    "size": 2818048,
                    "title": "Surat Al-Haaqqa"
                },
                {
                    "id": 70,
                    "fileName": "070.mp3",
                    "size": 2170880,
                    "title": "Surat Al-Maarij"
                },
                {
                    "id": 71,
                    "fileName": "071.mp3",
                    "size": 2113536,
                    "title": "Surat Nooh"
                },
                {
                    "id": 72,
                    "fileName": "072.mp3",
                    "size": 2424832,
                    "title": "Surat Al-Jinn"
                },
                {
                    "id": 73,
                    "fileName": "073.mp3",
                    "size": 1822720,
                    "title": "Surat Al-Muzzammil"
                },
                {
                    "id": 74,
                    "fileName": "074.mp3",
                    "size": 2215936,
                    "title": "Surat Al-Muddaththir"
                },
                {
                    "id": 75,
                    "fileName": "075.mp3",
                    "size": 1458176,
                    "title": "Surat Al-Qiyama"
                },
                {
                    "id": 76,
                    "fileName": "076.mp3",
                    "size": 2183168,
                    "title": "Surat Al-Insan"
                },
                {
                    "id": 77,
                    "fileName": "077.mp3",
                    "size": 1765376,
                    "title": "Surat Al-Mursalat"
                },
                {
                    "id": 78,
                    "fileName": "078.mp3",
                    "size": 2207744,
                    "title": "Surat An-Naba"
                },
                {
                    "id": 79,
                    "fileName": "079.mp3",
                    "size": 1986560,
                    "title": "Surat An-Naziat"
                },
                {
                    "id": 80,
                    "fileName": "080.mp3",
                    "size": 1527808,
                    "title": "Surat Abasa"
                },
                {
                    "id": 81,
                    "fileName": "081.mp3",
                    "size": 1032192,
                    "title": "Surat At-Takwir"
                },
                {
                    "id": 82,
                    "fileName": "082.mp3",
                    "size": 860160,
                    "title": "Surat Al-Infitar"
                },
                {
                    "id": 83,
                    "fileName": "083.mp3",
                    "size": 1736704,
                    "title": "Surat Al-Mutaffifin"
                },
                {
                    "id": 84,
                    "fileName": "084.mp3",
                    "size": 1118208,
                    "title": "Surat Al-Inshiqaq"
                },
                {
                    "id": 85,
                    "fileName": "085.mp3",
                    "size": 1069056,
                    "title": "Surat Al-Burooj"
                },
                {
                    "id": 86,
                    "fileName": "086.mp3",
                    "size": 602112,
                    "title": "Surat At-Tariq"
                },
                {
                    "id": 87,
                    "fileName": "087.mp3",
                    "size": 655360,
                    "title": "Surat Al-Ala"
                },
                {
                    "id": 88,
                    "fileName": "088.mp3",
                    "size": 892928,
                    "title": "Surat Al-Ghashiya"
                },
                {
                    "id": 89,
                    "fileName": "089.mp3",
                    "size": 1388544,
                    "title": "Surat Al-Fajr"
                },
                {
                    "id": 90,
                    "fileName": "090.mp3",
                    "size": 737280,
                    "title": "Surat Al-Balad"
                },
                {
                    "id": 91,
                    "fileName": "091.mp3",
                    "size": 569344,
                    "title": "Surat Ash-Shams"
                },
                {
                    "id": 92,
                    "fileName": "092.mp3",
                    "size": 733184,
                    "title": "Surat Al-Lail"
                },
                {
                    "id": 93,
                    "fileName": "093.mp3",
                    "size": 438272,
                    "title": "Surat Ad-Dhuha"
                },
                {
                    "id": 94,
                    "fileName": "094.mp3",
                    "size": 294912,
                    "title": "Surat Al-Inshirah"
                },
                {
                    "id": 95,
                    "fileName": "095.mp3",
                    "size": 401408,
                    "title": "Surat At-Tin"
                },
                {
                    "id": 96,
                    "fileName": "096.mp3",
                    "size": 663552,
                    "title": "Surat Al-Alaq"
                },
                {
                    "id": 97,
                    "fileName": "097.mp3",
                    "size": 339968,
                    "title": "Surat Al-Qadr"
                },
                {
                    "id": 98,
                    "fileName": "098.mp3",
                    "size": 856064,
                    "title": "Surat Al-Bayyina"
                },
                {
                    "id": 99,
                    "fileName": "099.mp3",
                    "size": 401408,
                    "title": "Surat Az-Zalzala"
                },
                {
                    "id": 100,
                    "fileName": "100.mp3",
                    "size": 450560,
                    "title": "Surat Al-Adiyat"
                },
                {
                    "id": 101,
                    "fileName": "101.mp3",
                    "size": 442368,
                    "title": "Surat Al-Qaria"
                },
                {
                    "id": 102,
                    "fileName": "102.mp3",
                    "size": 327680,
                    "title": "Surat At-Takathur"
                },
                {
                    "id": 103,
                    "fileName": "103.mp3",
                    "size": 184320,
                    "title": "Surat Al-Asr"
                },
                {
                    "id": 104,
                    "fileName": "104.mp3",
                    "size": 335872,
                    "title": "Surat Al-Humaza"
                },
                {
                    "id": 105,
                    "fileName": "105.mp3",
                    "size": 274432,
                    "title": "Surat Al-Fil"
                },
                {
                    "id": 106,
                    "fileName": "106.mp3",
                    "size": 229376,
                    "title": "Surat Quraish"
                },
                {
                    "id": 107,
                    "fileName": "107.mp3",
                    "size": 282624,
                    "title": "Surat Al-Maun"
                },
                {
                    "id": 108,
                    "fileName": "108.mp3",
                    "size": 163840,
                    "title": "Surat Al-Kauther"
                },
                {
                    "id": 109,
                    "fileName": "109.mp3",
                    "size": 294912,
                    "title": "Surat Al-Kafiroon"
                },
                {
                    "id": 110,
                    "fileName": "110.mp3",
                    "size": 225280,
                    "title": "Surat An-Nasr"
                },
                {
                    "id": 111,
                    "fileName": "111.mp3",
                    "size": 262144,
                    "title": "Surat Al-Masadd"
                },
                {
                    "id": 112,
                    "fileName": "112.mp3",
                    "size": 163840,
                    "title": "Surat Al-Ikhlas"
                },
                {
                    "id": 113,
                    "fileName": "113.mp3",
                    "size": 233472,
                    "title": "Surat Al-Falaq"
                },
                {
                    "id": 114,
                    "fileName": "114.mp3",
                    "size": 253952,
                    "title": "Surat An-Nas"
                }
            ]
        }
    ];

    // Just for test purpose, reduce the track size to 5 items only
    ARTISTS.forEach(function(artist){
        artist.tracks = artist.tracks.slice(99, 104);
    });
    //console.log("After slice: " + ARTISTS[2].tracks.length);

    angular.module('starter').constant('ARTISTS', ARTISTS);

}());
