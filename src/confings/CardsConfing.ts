export type ICard = {
    id : Number,
    title : string,
    information : string,
    img : string,
    buttonText : string
}

export const CardsConfing : ICard[] = [
    {
        id : 0,
        title : 'Animation',
        information  : 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
        img : '../../public/run.png',
        buttonText : "Get Started"
    },
    {
        id : 1,
        title : 'Design',
        information  : 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
         img : '../../public/gallery.png',
        buttonText : "Get Started"
    },
    {
        id : 2,
        title : 'Photography',
        information  : 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
         img : '../../public/photo.png',
        buttonText : "Get Started"
    },
    {
        id : 3,
        title : 'Crypto',
        information  : 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
         img : '../../public/crypto.png',
        buttonText : "Get Started"
    },
    {
        id : 4,
        title : 'Business',
        information  : 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
         img : '../../public/curt.png',
        buttonText : "Get Started"
    }
]