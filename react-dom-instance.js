const optionsDefault = {
	maxIteration: 4
};

function findInstance(node, opts) {
	const options = Object.assign({}, optionsDefault, opts);

	const fiber = getFiberFromNode(node);
	if (!fiber) return false;

	const instance = getInstanceFromFiber( fiber, options.maxIteration );
	if( !instance ) return false;

	let target = getTargetInstance(instance, instance, options.componentName, options.maxIteration);
	return target;
};

function getFiberFromNode(node) {
	let key = getFiberKey(node);

	if (!key) {
		node = node.children[0];
		key = node && getFiberKey(node);
	}

	return key ? node[key] : false;
}

function getFiberKey(node) {
	return Object.keys(node).find(key => (
		key.startsWith('__reactInternalInstance$')
	));
}

function getInstanceFromFiber( fiber, i ){
	let f = fiber;

	
	// return isInstanceFiber(f) ? f.stateNode : false;

	while( !isInstanceFiber(f) && i-- > 0 ){
		f = f && f.return;
	};

	return isInstanceFiber(f) ? f.stateNode : false;
}

function isInstanceFiber( fiber ){
	return fiber && fiber.type && typeof fiber.type !== 'string' && fiber.stateNode;
}

function getTargetInstance(childInstance, parentInstance, componentName, i) {
	// console.log('getting instance from fiber', childInstance, parentInstance);
	if( !childInstance && !parentInstance ) return false;

	if (childInstance && isTarget(childInstance, componentName)) {
		return childInstance;
	}
	if (parentInstance && childInstance !== parentInstance && isTarget(parentInstance, componentName)) {
		return parentInstance;
	}

	if (i <= 0) {
		warn('maxIteration exceeded and not ' + componentName + ' instance found.')
		return false;
	}

	const childFiber = childInstance && childInstance._reactInternalFiber.child;
	const parentFiber = parentInstance && parentInstance._reactInternalFiber.return;

	return getTargetInstance(
		isInstanceFiber(childFiber) && childFiber.stateNode,
		isInstanceFiber(parentFiber) && parentFiber.stateNode,
		componentName,
		i - 1
	);
}

function isTarget(instance, componentName) {
	if (!componentName) return true;
	
	return instance.constructor.name === componentName;
}


function warn( msg ){
	typeof console !== undefined && console.warn('react-dom-instance: ' + msg );
}

module.exports.findInstance = findInstance;
module.exports = {findInstance};