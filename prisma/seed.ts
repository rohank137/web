import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database with 30 manga...");

  const mangas = [
    {
      title: "Naruto Hindi",
      description: "Ek ladka jo hokage banne ka sapna dekhta hai.",
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757604012/naruto_smhzgx.jpg",
      type: "manga",
      status: "completed",
      chapters: [
        {
          number: 1,
          title: "Naruto Ka Safar",
          images: [
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772821/narutro_c1_apymqv.jpg",
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772816/narutro_c_niynxz.jpg",
          ],
        },
        {
          number: 2,
          title: "Shadow Clone Jutsu",
          images: [
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772821/narutro_c1_apymqv.jpg",
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772816/narutro_c_niynxz.jpg",
          ],
        },
      ],
    },
    {
      title: "One Piece Hindi",
      description: "Luffy aur uske nakama ka ek adventurous safar.",
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691733/one_peice_bsq8ex.jpg",
      type: "manga",
      status: "ongoing",
      chapters: [
        {
          number: 1,
          title: "Pirate King Ka Sapna",
          images: [
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772822/one_peice_c2_ssb68o.jpg",
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772821/one_peice_c1_p1mmrl.jpg",
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772822/one_peice_c3_dic0ua.jpg"
          ],
        },
      ],
    },
    {
      title: "Solo Leveling Hindi",
      description: "Ek kamzor hunter jo duniya ka sabse powerful ban jata hai.",
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691733/Solo_Leveling_rjmiud.jpg",
      type: "manhwa",
      status: "completed",
      chapters: [
        {
          number: 1,
          title: "Weakest Hunter",
          images: [
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772793/Solo_Leveling_c2_jxgw2j.jpg",
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772793/Solo_Leveling_c1_nikysr.jpg",
          ],
        },
      ],
    },
    {
      title: "Dragon Ball Hindi",
      description: "Goku aur uski ladai Z warriors ke sath.",
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691773/Dragon_Bal_ba0fdk.jpg",
      type: "manga",
      status: "completed",
      chapters: [
        {
          number: 1,
          title: "Saiyan Saga",
          images: [
           "https://res.cloudinary.com/djnblmtaq/image/upload/v1757770305/dragon_ball_c2_vq6ko6.jpg",
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757770305/dragon_ball_c1_t7zees.jpg",

          ],
        },
      ],
    },
    {
      title: "Attack on Titan Hindi",
      description: "Titans aur insano ki ladai ka kahani.",
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691733/Attack_on_Titan_epgein.jpg",
      type: "manga",
      status: "completed",
      chapters: [
        {
          number: 1,
          title: "Wall Maria Collapse",
          images: [
           "https://res.cloudinary.com/djnblmtaq/image/upload/v1757766909/Attack_on_Titan_c2_xresmp.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757766908/Attack_on_Titan_c1_k07958.jpg",
          ],
        },
      ],
    },
    {
      title: "Tokyo Revengers Hindi",
      description: "Time travel aur gang wars ki kahani.",
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691733/Tokyo_Revengers_rfus9w.jpg",
      type: "manga",
      status: "ongoing",
      chapters: [
        {
          number: 1,
          title: "First Time Travel",
          images: [
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772798/Tokyo_Revengers_c2_jtbioi.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772794/Tokyo_Revengers_c1_fasgem.jpg",

          ],
        },
      ],
    },
    {
      title: "Bleach Hindi",
      description: "Ichigo aur Soul Society ki kahani.",
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691734/Bleach_vi6yqr.jpg",
      type: "manga",
      status: "completed",
      chapters: [
        {
          number: 1,
          title: "Kurosaki Ichigo",
          images: [
             "https://res.cloudinary.com/djnblmtaq/image/upload/v1757767819/Bleach_c2_qgnar4.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757767818/Bleach_c1_wc31sx.jpg",

          ],
        },
      ],
    },
    {
      title: "Demon Slayer Hindi",
      description: "Tanjiro ki kahani jo apni behen ko bachane nikla hai.",
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691764/Demon_Slayer_Hindi_j8ge2f.jpg",
      type: "manga",
      status: "completed",
      chapters: [
        {
          number: 1,
          title: "First Demon Hunt",
          images: [
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757770200/Demon_Slayer_Hindi_c2_umpu9b.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757768520/Demon_Slayer_Hindi_c1_myavh3.jpg",
          ],
        },
      ],
    },
    {
      title: "Black Clover Hindi",
      description: "Asta ek ladka jisme magic nahi par banega Wizard King.",
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691734/Black_Clover_xb0bbr.jpg",
      type: "manga",
      status: "ongoing",
      chapters: [
        {
          number: 1,
          title: "No Magic Boy",
          images: [
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772800/Black_Clover_c1_fsy58w.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757767560/Black_Clover_c2_wfgatv.jpg",
          ],
        },
      ],
    },
    {
      title: "Death Note Hindi",
      description: "Light Yagami aur uska notebook jo maut lata hai.",
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691763/Death_Note_dgm6dk.jpg",
      type: "manga",
      status: "completed",
      chapters: [
        {
          number: 1,
          title: "Notebook of Death",
          images: [
            "https://res.cloudinary.com/djnblmtaq/image/upload/v1757767838/Death_Note_c2_nc9xvv.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757767838/Death_Note_c2_nc9xvv.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757767820/Death_Note_c1_blkiqs.jpg",

          ],
        },
      ],
    },
    // 👇 Ab yaha 20 aur add karte hain (short format)
    { 
        title: "One Punch Man Hindi", 
        description: "Saitama ka ek punch sabko hara deta hai.", 
        image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691733/One_Punch_Man_swpyys.jpg", 
        type: "manga", 
        status: "ongoing", 
        chapters: [
            { number: 1,
                title: "Caped Baldy", 
                images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757772823/One_Punch_Man_c1_y4rhx9.jpg"

                ] 
            }
        ] 
    },
    { 
        title: "Jujutsu Kaisen Hindi", 
        description: "Curses aur sorcerers ki kahani.", 
        image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691808/Jujutsu_Kaisen_xktg2m.jpg", 
        type: "manga", 
        status: "ongoing", 
        chapters: [
            { number: 1, 
                title: "Itadori Yuji", 
                images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757772812/Jujutsu_Kaisen_c1_qklywi.jpg"
                    
                ] 
            }
        ] 
    },
    { title: "Chainsaw Man Hindi", description: "Denji aur uska chainsaw demon form.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691754/Chainsaw_Man_gl0k7e.jpg", type: "manga", status: "ongoing", chapters: [{ number: 1, title: "Chainsaw Boy", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757767819/Chainsaw_Man_c1_gq6gur.jpg"] }] },
    { title: "Blue Lock Hindi", description: "Football strikers ke liye training project.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691734/Blue_Lock_pcgtfn.jpg", type: "manga", status: "ongoing", chapters: [{ number: 1, title: "Ego Jinpachi", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757767819/Blue_Lock_c1_ahfgor.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757767819/Blue_Lock_c2_rizdtt.jpg",] }] },
    { title: "Hunter x Hunter Hindi", description: "Gon aur Killua ka safar.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691807/Hunter_x_Hunter_dsn5im.jpg", type: "manga", status: "hiatus", chapters: [{ number: 1, title: "Hunter Exam", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757772805/Hunter_x_Hunter_c2_pcuow5.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772805/Hunter_x_Hunter_c1_wpulmi.jpg",] }] },
    { title: "Fullmetal Alchemist Hindi", description: "Elric brothers aur alchemy ki kahani.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691774/Fullmetal_Alchemist_mql5tf.jpg", type: "manga", status: "completed", chapters: [{ number: 1, title: "Human Transmutation", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757770306/Fullmetal_Alchemist_c1_k4zmfu.jpg"] }] },
    { title: "Vagabond Hindi", description: "Miyamoto Musashi ki kahani.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691733/Vagabond_mvrbq5.jpg", type: "manga", status: "hiatus", chapters: [{ number: 1, title: "The Lone Samurai", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757772799/Vagabond_c1_ns4alj.jpg"] }] },
    { title: "Fairy Tail Hindi", description: "Natsu aur Lucy ki guild adventures.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691773/Fairy_Tail_ig5yun.jpg", type: "manga", status: "completed", chapters: [{ number: 1, title: "Fire Dragon Slayer", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757770306/Fairy_Tail_c2_zo7jrt.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757770305/Fairy_Tail_c1_tfgauj.jpg",] }] },
    { title: "Boruto Hindi", description: "Naruto ka beta Boruto ki kahani.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691754/boruto_thmcqk.jpg", type: "manga", status: "ongoing", chapters: [{ number: 1, title: "Boruto Uzumaki", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757767819/Boruto_c1_oh6rez.jpg"] }] },
    { title: "My Hero Academia Hindi", description: "Midoriya aur heroes ka safar.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691845/My_Hero_Academia_d0hbln.jpg", type: "manga", status: "ongoing", chapters: [{ number: 1, title: "Deku", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757772815/My_Hero_Academia_c1_nv5gif.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757772815/My_Hero_Academia_c2_sckou5.jpg",] }] },
    { title: "Fire Force Hindi", description: "Special Fire Force vs Infernals.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691774/Fire_Force_wnxtgb.jpg", type: "manga", status: "completed", chapters: [{ number: 1, title: "Shinra Kusakabe", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757770306/Fire_Force_c1_wetfrr.jpg",
                    "https://res.cloudinary.com/djnblmtaq/image/upload/v1757770306/Fairy_Tail_c2_zo7jrt.jpg",] }] },
    { title: "Berserk Hindi", description: "Guts ki dark fantasy kahani.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691733/Berserk_rdls8c.jpg", type: "manga", status: "ongoing", chapters: [{ number: 1, title: "Black Swordsman", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757766909/Berserk_c1_dbs5u4.jpg"] }] },
    { title: "Haikyuu!! Hindi", description: "Volleyball players ka journey.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691807/Haikyuu_rhxxax.jpg", type: "manga", status: "completed", chapters: [{ number: 1, title: "Karasuno", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757772804/Haikyuu_c1_j6qbuk.jpg"] }] },
    { title: "JoJo's Bizarre Adventure Hindi", description: "Joestar family aur unke stands.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691808/JoJo_s_Bizarre_Adventure_s7rhhh.jpg", type: "manga", status: "ongoing", chapters: [{ number: 1, title: "Dio Brando", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757772807/JoJo_s_Bizarre_Adventure_c1_ullddq.jpg"] }] },
    { title: "Monster Hindi", description: "Doctor aur ek serial killer ki kahani.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691845/Monster_hyf60m.jpg", type: "manga", status: "completed", chapters: [{ number: 1, title: "The Monster", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757772813/Monster_c1_bejhmg.jpg"] }] },
    { title: "Akame ga Kill Hindi", description: "Assassins aur empire ki ladai.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691733/Akame_ga_Kill_lq0ota.jpg", type: "manga", status: "completed", chapters: [{ number: 1, title: "Night Raid", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757766909/Akame_ga_Kill_c1_rajz15.jpg"] }] },
    { title: "Inuyasha Hindi", description: "Feudal era demons aur humans ki kahani.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691807/Inuyasha_pgpquk.jpg", type: "manga", status: "completed", chapters: [{ number: 1, title: "Half-Demon", 
        images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757772806/Inuyasha_c1_qhxmux.jpg"] }] },
    { title: "Parasyte Hindi", description: "Parasite aliens aur humans ka survival.", 
      image: "https://res.cloudinary.com/djnblmtaq/image/upload/v1757691733/Parasyte_arzyyq.jpg", type: "manga", status: "completed", chapters: [{ number: 1, title: "Migi", 
      images: ["https://res.cloudinary.com/djnblmtaq/image/upload/v1757772792/Parasyte_c1_ykqq1p.jpg"] }] },
  ];

  for (const manga of mangas) {
    await prisma.manga.create({
      data: {
        title: manga.title,
        description: manga.description,
        image: manga.image,
        type: manga.type,
        status: manga.status,
        chapters: {
          create: manga.chapters,
        },
      },
    });
  }

  console.log("✅ 30 manga inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });