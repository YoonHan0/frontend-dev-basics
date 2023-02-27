

imageViewer = {
	
	init: function() {
		for(var i = 0; i < 100; i++){
			this._changeImage();
		}
	},
	_changeImage: function() {
		var index = Math.floor(Math.random() * this._images.length);
		console.log(index);	
		// console.log(this._images[index]);
		
		return this._images[index];
	},
	
	_intervalId: null,
	
	_images: [
		{
		name: '빨간 꽃',			// title
		file: 'Chrysanthemum.jpg'	// src
	},
		{
		name: '암벽',
		file: 'Desert.jpg'
	},
	{
		name: '꽃',
		file: 'Hydrangeas.jpg'
	},
	{
		name: '해파리',
		file: 'Jellyfish.jpg'
	},
	{
		name: '코알라',
		file: 'Koala.jpg'
	},
	{
		name: '밝은 집',
		file: 'Lighthouse.jpg'
	},
	{
		name: '펭귄',
		file: 'Penguins.jpg'
	},
	{
		name: '튤립',
		file: 'Tulips.jpg'
	},
	
	]
}