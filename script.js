
class SHGamesIntro extends Phaser.Scene {
    constructor() {
        super('SHGamesIntro');
    }
    
    preload(){
        this.load.path = './assets/';
        this.load.audio('evillaugh', 'laugh.mp3'); 
        //this.load.image('sectionimage', 'sectionimage.png');
        //this.load.video(SHGopen, 'SHGopenaudio.mp4'); 
    }
    create(){

        //this.sound.play('evillaugh');
        const music = this.sound.add('evillaugh');

        music.play();

        //this.sound.pauseOnBlur = true;
        

        const video = this.add.video(360, 360);


        video.loadURL('assets/SHGopencnd.png.mp4', true);
        
        video.play(false);

       
        
        this.time.delayedCall(7000, () =>{this.scene.start('OpeningCutscene')})
    }

}

class OpeningCutscene extends Phaser.Scene {
    constructor() {
        super('OpeningCutscene');
    }
    
    preload(){
        this.load.path = './assets/';
        this.load.image('cutscene', 'CloudSamuraiCutscene.png');
        
    }
    create(){

        
        this.imageObject = this.add.image(
            360,
            360,
            'cutscene',
        )
        this.imageObject.setScale(0.4)
        
        this.time.delayedCall(5000, () =>{this.scene.start('GameMenu')})
    }

}

class GameMenu extends Phaser.Scene {
    constructor() {
        super('GameMenu');
    }
    
    preload(){
        this.load.path = './assets/';
        this.load.audio('menusong', 'menusong.mp3');
        this.load.video(GameMenu, 'GameOpen.mp4'); 
    }
    create(){

        this.add.text(10, 25, "Cloud Samurai", {
            fontFamily:'Georgia, serif', 
            fontSize: 48,
        })

        this.add.text(600, 666, 'Play', {fontFamily:'Georgia, serif', fontSize: 36,});
            

        const music = this.sound.add('menusong', { loop: true });

        music.play();

        const video = this.add.video(360, 360);

        video.loadURL('assets/GameOpen.mp4', true);
        
        video.play(true);
        
        
    }

}



let config = {
    type: Phaser.AUTO,
    width: 720,
    height: 720,
    backgroundColor: '#000000',
    scene: [SHGamesIntro, OpeningCutscene, GameMenu],
}

let game = new Phaser.Game(config);


