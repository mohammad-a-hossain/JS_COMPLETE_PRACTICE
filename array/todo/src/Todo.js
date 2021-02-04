function generateID(arr) {
	if (arr.length === 0) return 1;
	return arr[arr.length - 1].id + 1;
}

/**
 * @method addItem
 * @method done
 * @method update
 * @method next
 * @method find
 * @method list
 */
class Todo {
	/**
	 *
	 * @param {Array} todoList
	 */
	constructor(todoList = []) {
		this.todoList = todoList;
	}

	addItem(text) {
		const item = {
			text,
			id: generateID(this.todoList),
			created: new Date(),
		};
		this.todoList.push(item);
	}

	update(id, text) {
		for (let i = 0; i < this.todoList.length; i++) {
			if (this.todoList[i].id === id) {
				this.todoList[i].text = text;
				break;
			}
		}
	}

	next() {
		return this.todoList[0];
	}

	done() {
		return this.todoList.shift();
	}

	list() {
		return this.todoList;
	}

	find(term) {
		const result = [];
		for (let i = 0; i < this.todoList.length; i++) {
			const item = this.todoList[i];
			if (item.text.toLowerCase().includes(term.toLowerCase())) {
				result.push(item);
			}
		}
		return result;
	}
}

module.exports = Todo;
