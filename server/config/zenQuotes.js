const zenQuotes = [
  {
    id: 1,
    author: "Thich Nhat Hanh",
    quote: "Smile, breathe and go slowly."
  },
  {
    id: 2,
    author: "Shunryu Suzuki",
    quote: "In the beginner’s mind there are many possibilities, but in the expert’s there are few."
  },
  {
    id: 3,
    author: "Dogen",
    quote: "If you can't find the truth right where you are, where else do you expect to find it?"
  },
  {
    id: 4,
    author: "Alan Watts",
    quote: "Muddy water is best cleared by leaving it alone."
  },
  {
    id: 5,
    author: "Zen Proverb",
    quote: "Let go or be dragged."
  },
  {
    id: 6,
    author: "Thich Nhat Hanh",
    quote: "The present moment is the only time over which we have dominion."
  },
  {
    id: 7,
    author: "Rinzai",
    quote: "If you meet the Buddha, kill him."
  },
  {
    id: 8,
    author: "Zen Proverb",
    quote: "When walking, walk. When eating, eat."
  },
  {
    id: 9,
    author: "Shunryu Suzuki",
    quote: "Each of you is perfect the way you are ... and you can use a little improvement."
  },
  {
    id: 10,
    author: "Eihei Dogen",
    quote: "To study Buddhism is to study yourself. To study yourself is to forget yourself."
  },
  {
    id: 11,
    author: "Zen Proverb",
    quote: "Sitting quietly, doing nothing, spring comes, and the grass grows by itself."
  },
  {
    id: 12,
    author: "Hakuin Ekaku",
    quote: "Not knowing how near the truth is, we seek it far away."
  },
  {
    id: 13,
    author: "Alan Watts",
    quote: "Trying to define yourself is like trying to bite your own teeth."
  },
  {
    id: 14,
    author: "Bankei",
    quote: "Don’t side with yourself."
  },
  {
    id: 15,
    author: "Thich Nhat Hanh",
    quote: "Drink your tea slowly and reverently, as if it is the axis on which the earth revolves."
  },
  {
    id: 16,
    author: "Zen Proverb",
    quote: "No snowflake ever falls in the wrong place."
  },
  {
    id: 17,
    author: "Shunryu Suzuki",
    quote: "We do not exist for the sake of something else. We exist for the sake of ourselves."
  },
  {
    id: 18,
    author: "Zen Proverb",
    quote: "The obstacle is the path."
  },
  {
    id: 19,
    author: "Alan Watts",
    quote: "The meaning of life is just to be alive. It is so plain and so obvious and so simple."
  },
  {
    id: 20,
    author: "Eihei Dogen",
    quote: "Do not follow the ideas of others, but learn to listen to the voice within yourself."
  },
  {
    id: 21,
    author: "Zen Proverb",
    quote: "Chop wood, carry water."
  },
  {
    id: 22,
    author: "Thich Nhat Hanh",
    quote: "Peace is every step."
  },
  {
    id: 23,
    author: "Hakuin Ekaku",
    quote: "Meditation in action is endless."
  },
  {
    id: 24,
    author: "Alan Watts",
    quote: "You are the universe experiencing itself."
  },
  {
    id: 25,
    author: "Zen Proverb",
    quote: "When the student is ready, the teacher will appear."
  },
  {
    id: 26,
    author: "Shunryu Suzuki",
    quote: "Zen is not some kind of excitement, but concentration on our usual everyday routine."
  },
  {
    id: 27,
    author: "Eihei Dogen",
    quote: "Do not think you will necessarily be aware of your own enlightenment."
  },
  {
    id: 28,
    author: "Thich Nhat Hanh",
    quote: "Waking up this morning, I smile. Twenty-four brand new hours are before me."
  },
  {
    id: 29,
    author: "Zen Proverb",
    quote: "He who knows, does not speak. He who speaks, does not know."
  },
  {
    id: 30,
    author: "Bankei",
    quote: "The unborn Buddha-mind is yours right now."
  },
  {
    id: 31,
    author: "Alan Watts",
    quote: "You are a function of what the whole universe is doing."
  },
  {
    id: 32,
    author: "Zen Proverb",
    quote: "Before enlightenment, chop wood, carry water. After enlightenment, chop wood, carry water."
  },
  {
    id: 33,
    author: "Shunryu Suzuki",
    quote: "You’re perfect just as you are — and you could use a little improvement."
  },
  {
    id: 34,
    author: "Dogen",
    quote: "A flower falls, even though we love it; and a weed grows, even though we do not love it."
  },
  {
    id: 35,
    author: "Zen Proverb",
    quote: "Better to see the face than to hear the name."
  },
  {
    id: 36,
    author: "Thich Nhat Hanh",
    quote: "There is no way to happiness — happiness is the way."
  },
  {
    id: 37,
    author: "Alan Watts",
    quote: "To have faith is to trust yourself to the water."
  },
  {
    id: 38,
    author: "Zen Proverb",
    quote: "When you realize nothing is lacking, the whole world belongs to you."
  },
  {
    id: 39,
    author: "Shunryu Suzuki",
    quote: "As long as you seek for something, you will get the shadow of reality and not reality itself."
  },
  {
    id: 40,
    author: "Dogen",
    quote: "Time itself is being, and all being is time."
  },
  {
    id: 41,
    author: "Zen Proverb",
    quote: "Even death is not to be feared by one who has lived wisely."
  },
  {
    id: 42,
    author: "Bankei",
    quote: "Do not try to be special."
  },
  {
    id: 43,
    author: "Alan Watts",
    quote: "Man suffers only because he takes seriously what the gods made for fun."
  },
  {
    id: 44,
    author: "Thich Nhat Hanh",
    quote: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor."
  },
  {
    id: 45,
    author: "Zen Proverb",
    quote: "Ten thousand flowers in spring, the moon in autumn, a cool breeze in summer, snow in winter. If your mind isn’t clouded by unnecessary things, this is the best season of your life."
  },
  {
    id: 46,
    author: "Shunryu Suzuki",
    quote: "Don’t move. Just die—over and over. Don’t anticipate. Nothing can save you now, because this is your final moment. Not even enlightenment will help you now, because you have no other moment."
  },
  {
    id: 47,
    author: "Zen Proverb",
    quote: "Knowledge is learning something every day. Wisdom is letting go of something every day."
  },
  {
    id: 48,
    author: "Dogen",
    quote: "Realization is not knowledge about the universe, but the living experience of the nature of the universe."
  },
  {
    id: 49,
    author: "Zen Proverb",
    quote: "Barn’s burnt down — now I can see the moon."
  },
  {
    id: 50,
    author: "Thich Nhat Hanh",
    quote: "Because you are alive, everything is possible."
  }
];

module.exports = zenQuotes;