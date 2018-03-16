export const fileArray = (array, determinator) => {
	return array.reduce((final, item) => {
		determinator(item)
			? final[0].push(item)
			: final[1].push(item)
		
		return final;
	}, [[], []])
}