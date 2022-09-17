"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[5325],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=f(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,p=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(p,a(a({ref:n},l),{},{components:t})):o.createElement(p,a({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var f={};for(var s in n)hasOwnProperty.call(n,s)&&(f[s]=n[s]);f.originalType=e,f.mdxType="string"==typeof e?e:r,a[1]=f;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>f,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={},a="Commit \u9636\u6bb5",f={unversionedId:"react/Commit",id:"react/Commit",title:"Commit \u9636\u6bb5",description:"\u4e66\u63a5\u4e0a\u56de",source:"@site/docs/react/5.Commit.md",sourceDirName:"react",slug:"/react/Commit",permalink:"/docs/react/Commit",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"react",previous:{title:"Render \u9636\u6bb5",permalink:"/docs/react/Render"},next:{title:"DOM-DIFF",permalink:"/docs/react/dom-diff"}},s={},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"commitBeforeMutationEffects",id:"commitbeforemutationeffects",level:2},{value:"commitMutationEffects",id:"commitmutationeffects",level:2},{value:"commitLayoutEffects",id:"commitlayouteffects",level:2}],l={toc:c};function u(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commit-\u9636\u6bb5"},"Commit \u9636\u6bb5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e66\u63a5\u4e0a\u56de"),"\n\u4e0a\u56de\u4e66\u8bf4\u9053",(0,r.kt)("inlineCode",{parentName:"p"},"workInProgressFiber"),"\u5df2\u751f\u6210\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"effectList"),"\u4e5f\u751f\u6210\u4e86\u3002\u90a3\u4e48",(0,r.kt)("inlineCode",{parentName:"p"},"effectList"),"\u4f5c\u7528\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"commit \u9636\u6bb5\u4e3b\u8981\u6d41\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"commitBeforeMutationEffects DOM \u6302\u8f7d\u4e4b\u524d\u7684\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"commitMutationEffects \u5c06 DOM \u6302\u8f7d\u5230\u9875\u9762"),(0,r.kt)("li",{parentName:"ul"},"commitLayoutEffects DOM \u6302\u8f7d\u9875\u9762\u540e\u7684\u5904\u7406")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7479).Z,width:"1470",height:"678"})),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"commit \u9636\u6bb5\u7684\u5f00\u59cb\u65f6\u95f4\u4f1a\u53bb\u5904\u7406\u4e0a\u6b21 render \u9636\u6bb5\u6ce8\u518c & \u8fd8\u672a\u88ab\u5b8c\u6210\u7684 effect \u5f02\u6b65\u5904\u7406\u51fd\u6570\u3002while \u5faa\u73af\u4fdd\u8bc1\u5982\u679c\u5f02\u6b65\u51fd\u6570\u4e2d\u6267\u884c\u4e86\u65b0\u7684 setState \u80fd\u5728 commit \u524d\u7f6e\u5b8c\u6210\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function commitRootImpl(root, renderPriorityLevel) {\n  do {\n    flushPassiveEffects();\n  } while (rootWithPendingPassiveEffects !== null);\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u7ecf\u8fc7scheduler\u53bb\u8c03\u5ea6\u6267\u884cflushPassiveEffectsImpl\nexport function flushPassiveEffects(): boolean {\n  // Returns whether passive effects were flushed.\n  if (pendingPassiveEffectsRenderPriority !== NoSchedulerPriority) {\n    const priorityLevel =\n      pendingPassiveEffectsRenderPriority > NormalSchedulerPriority\n        ? NormalSchedulerPriority\n        : pendingPassiveEffectsRenderPriority;\n    pendingPassiveEffectsRenderPriority = NoSchedulerPriority;\n    if (decoupleUpdatePriorityFromScheduler) {\n      const previousLanePriority = getCurrentUpdateLanePriority();\n      try {\n        setCurrentUpdateLanePriority(\n          schedulerPriorityToLanePriority(priorityLevel)\n        );\n        return runWithPriority(priorityLevel, flushPassiveEffectsImpl);\n      } finally {\n        setCurrentUpdateLanePriority(previousLanePriority);\n      }\n    } else {\n      return runWithPriority(priorityLevel, flushPassiveEffectsImpl);\n    }\n  }\n  return false;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u9500\u6bc1effect\u7684\u56de\u8c03\n// \u521b\u5efa\u65b0\u7684effect\u7684\u56de\u8c03\n\nfunction flushPassiveEffectsImpl() {\n  if (rootWithPendingPassiveEffects === null) {\n    return false;\n  }\n\n  const root = rootWithPendingPassiveEffects;\n  const lanes = pendingPassiveEffectsLanes;\n  rootWithPendingPassiveEffects = null;\n  pendingPassiveEffectsLanes = NoLanes;\n\n  if (enableSchedulingProfiler) {\n    markPassiveEffectsStarted(lanes);\n  }\n\n  const prevExecutionContext = executionContext;\n  executionContext |= CommitContext;\n  const prevInteractions = pushInteractions(root);\n\n  // First pass: Destroy stale passive effects.\n  const unmountEffects = pendingPassiveHookEffectsUnmount;\n  pendingPassiveHookEffectsUnmount = [];\n  for (let i = 0; i < unmountEffects.length; i += 2) {\n    const effect = ((unmountEffects[i]: any): HookEffect);\n    const fiber = ((unmountEffects[i + 1]: any): Fiber);\n    const destroy = effect.destroy;\n    effect.destroy = undefined;\n\n    if (typeof destroy === 'function') {\n      try {\n        if (\n          enableProfilerTimer &&\n          enableProfilerCommitHooks &&\n          fiber.mode & ProfileMode\n        ) {\n          try {\n            startPassiveEffectTimer();\n            destroy();\n          } finally {\n            recordPassiveEffectDuration(fiber);\n          }\n        } else {\n          destroy();\n        }\n      } catch (error) {\n        invariant(fiber !== null, 'Should be working on an effect.');\n        captureCommitPhaseError(fiber, error);\n      }\n    }\n  }\n  // Second pass: Create new passive effects.\n  const mountEffects = pendingPassiveHookEffectsMount;\n  pendingPassiveHookEffectsMount = [];\n  for (let i = 0; i < mountEffects.length; i += 2) {\n    const effect = ((mountEffects[i]: any): HookEffect);\n    const fiber = ((mountEffects[i + 1]: any): Fiber);\n\n    try {\n      const create = effect.create;\n      if (\n        enableProfilerTimer &&\n        enableProfilerCommitHooks &&\n        fiber.mode & ProfileMode\n      ) {\n        try {\n          startPassiveEffectTimer();\n          effect.destroy = create();\n        } finally {\n          recordPassiveEffectDuration(fiber);\n        }\n      } else {\n        effect.destroy = create();\n      }\n    } catch (error) {\n      invariant(fiber !== null, 'Should be working on an effect.');\n      captureCommitPhaseError(fiber, error);\n    }\n  }\n\n  let effect = root.current.firstEffect;\n  while (effect !== null) {\n    const nextNextEffect = effect.nextEffect;\n    // Remove nextEffect pointer to assist GC\n    effect.nextEffect = null;\n    if (effect.flags & Deletion) {\n      detachFiberAfterEffects(effect);\n    }\n    effect = nextNextEffect;\n  }\n\n  if (enableProfilerTimer && enableProfilerCommitHooks) {\n    const profilerEffects = pendingPassiveProfilerEffects;\n    pendingPassiveProfilerEffects = [];\n    for (let i = 0; i < profilerEffects.length; i++) {\n      const fiber = ((profilerEffects[i]: any): Fiber);\n      commitPassiveEffectDurations(root, fiber);\n    }\n  }\n\n  if (enableSchedulerTracing) {\n    popInteractions(((prevInteractions: any): Set<Interaction>));\n    finishPendingInteractions(root, lanes);\n  }\n\n  if (enableSchedulingProfiler) {\n    markPassiveEffectsStopped();\n  }\n\n  executionContext = prevExecutionContext;\n\n  flushSyncCallbackQueue();\n\n  // If additional passive effects were scheduled, increment a counter. If this\n  // exceeds the limit, we'll fire a warning.\n  nestedPassiveUpdateCount =\n    rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1;\n\n  return true;\n}\n")),(0,r.kt)("h2",{id:"commitbeforemutationeffects"},"commitBeforeMutationEffects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// commitRootImpl \u8fed\u4ee3nextEffect \u53bb\u5904\u7406  commitBeforeMutationEffects\ndo {\n  try {\n    commitBeforeMutationEffects();\n  } catch (error) {\n    invariant(nextEffect !== null, 'Should be working on an effect.');\n    captureCommitPhaseError(nextEffect, error);\n    nextEffect = nextEffect.nextEffect;\n  }\n} while (nextEffect !== null);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// commitBeforeMutationLifeCycles;\n\nfunction commitBeforeMutationEffects() {\n  while (nextEffect !== null) {\n    const current = nextEffect.alternate;\n\n    if (!shouldFireAfterActiveInstanceBlur && focusedInstanceHandle !== null) {\n      if ((nextEffect.flags & Deletion) !== NoFlags) {\n        if (doesFiberContain(nextEffect, focusedInstanceHandle)) {\n          shouldFireAfterActiveInstanceBlur = true;\n          beforeActiveInstanceBlur();\n        }\n      } else {\n        // TODO: Move this out of the hot path using a dedicated effect tag.\n        if (\n          nextEffect.tag === SuspenseComponent &&\n          isSuspenseBoundaryBeingHidden(current, nextEffect) &&\n          doesFiberContain(nextEffect, focusedInstanceHandle)\n        ) {\n          shouldFireAfterActiveInstanceBlur = true;\n          beforeActiveInstanceBlur();\n        }\n      }\n    }\n\n    const flags = nextEffect.flags;\n    if ((flags & Snapshot) !== NoFlags) {\n      setCurrentDebugFiberInDEV(nextEffect);\n\n      commitBeforeMutationEffectOnFiber(current, nextEffect);\n\n      resetCurrentDebugFiberInDEV();\n    }\n    if ((flags & Passive) !== NoFlags) {\n      // If there are passive effects, schedule a callback to flush at\n      // the earliest opportunity.\n      if (!rootDoesHavePassiveEffects) {\n        rootDoesHavePassiveEffects = true;\n        scheduleCallback(NormalSchedulerPriority, () => {\n          flushPassiveEffects();\n          return null;\n        });\n      }\n    }\n    nextEffect = nextEffect.nextEffect;\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// commitBeforeMutationLifeCycles\n\nfunction commitBeforeMutationLifeCycles(\n  current: Fiber | null,\n  finishedWork: Fiber\n): void {\n  switch (finishedWork.tag) {\n    case FunctionComponent:\n    case ForwardRef:\n    case SimpleMemoComponent:\n    case Block: {\n      return;\n    }\n    case ClassComponent: {\n      if (finishedWork.flags & Snapshot) {\n        if (current !== null) {\n          const prevProps = current.memoizedProps;\n          const prevState = current.memoizedState;\n          const instance = finishedWork.stateNode;\n\n          const snapshot = instance.getSnapshotBeforeUpdate(\n            finishedWork.elementType === finishedWork.type\n              ? prevProps\n              : resolveDefaultProps(finishedWork.type, prevProps),\n            prevState\n          );\n          instance.__reactInternalSnapshotBeforeUpdate = snapshot;\n        }\n      }\n      return;\n    }\n    case HostRoot: {\n      if (supportsMutation) {\n        if (finishedWork.flags & Snapshot) {\n          const root = finishedWork.stateNode;\n          clearContainer(root.containerInfo);\n        }\n      }\n      return;\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"commitmutationeffects"},"commitMutationEffects"),(0,r.kt)("p",null,"\u4e0b\u4e00\u4e2a\u9636\u6bb5\u662f\u7a81\u53d8\u9636\u6bb5\uff0c\u6211\u4eec\u7a81\u53d8\u5bbf\u4e3b\u6811\u3002\nnextEffect = firstEffect;\nroot.current = finishedWork;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u8bb2nextEffect\u8d4b\u503cfirstEffect \u8fed\u4ee3\u5904\u7406 commitMutationEffects\nnextEffect = firstEffect;\ndo {\n  try {\n    commitMutationEffects(root, renderPriorityLevel);\n  } catch (error) {\n    invariant(nextEffect !== null, 'Should be working on an effect.');\n    captureCommitPhaseError(nextEffect, error);\n    nextEffect = nextEffect.nextEffect;\n  }\n} while (nextEffect !== null);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// commitMutationEffects\nfunction commitMutationEffects(\n  root: FiberRoot,\n  renderPriorityLevel: ReactPriorityLevel\n) {\n  // TODO: Should probably move the bulk of this function to commitWork.\n  while (nextEffect !== null) {\n    setCurrentDebugFiberInDEV(nextEffect);\n\n    const flags = nextEffect.flags;\n\n    if (flags & ContentReset) {\n      commitResetTextContent(nextEffect);\n    }\n\n    if (flags & Ref) {\n      const current = nextEffect.alternate;\n      if (current !== null) {\n        commitDetachRef(current);\n      }\n      if (enableScopeAPI) {\n        // TODO: This is a temporary solution that allowed us to transition away\n        // from React Flare on www.\n        if (nextEffect.tag === ScopeComponent) {\n          commitAttachRef(nextEffect);\n        }\n      }\n    }\n\n    // The following switch statement is only concerned about placement,\n    // updates, and deletions. To avoid needing to add a case for every possible\n    // bitmap value, we remove the secondary effects from the effect tag and\n    // switch on that value.\n    const primaryFlags = flags & (Placement | Update | Deletion | Hydrating);\n    switch (primaryFlags) {\n      case Placement: {\n        commitPlacement(nextEffect);\n        // Clear the "placement" from effect tag so that we know that this is\n        // inserted, before any life-cycles like componentDidMount gets called.\n        // TODO: findDOMNode doesn\'t rely on this any more but isMounted does\n        // and isMounted is deprecated anyway so we should be able to kill this.\n        nextEffect.flags &= ~Placement;\n        break;\n      }\n      case PlacementAndUpdate: {\n        // Placement\n        commitPlacement(nextEffect);\n        // Clear the "placement" from effect tag so that we know that this is\n        // inserted, before any life-cycles like componentDidMount gets called.\n        nextEffect.flags &= ~Placement;\n\n        // Update\n        const current = nextEffect.alternate;\n        commitWork(current, nextEffect);\n        break;\n      }\n      case Hydrating: {\n        nextEffect.flags &= ~Hydrating;\n        break;\n      }\n      case HydratingAndUpdate: {\n        nextEffect.flags &= ~Hydrating;\n\n        // Update\n        const current = nextEffect.alternate;\n        commitWork(current, nextEffect);\n        break;\n      }\n      case Update: {\n        const current = nextEffect.alternate;\n        commitWork(current, nextEffect);\n        break;\n      }\n      case Deletion: {\n        commitDeletion(root, nextEffect, renderPriorityLevel);\n        break;\n      }\n    }\n\n    resetCurrentDebugFiberInDEV();\n    nextEffect = nextEffect.nextEffect;\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u8fed\u4ee3\u6267\u884c nextEffect \u66f4\u65b0\u526f\u4f5c\u7528\ncommitPlacement(nextEffect); // \u63d2\u5165\u8282\u70b9 \u5224\u65ad\u662f\u5426\u6e05\u7a7a\u7236\u8282\u70b9\u7684\u5185\u5bb9\uff0c\u5728\u8fdb\u884c\ncommitWork(); // \u66f4\u65b0\u5c5e\u6027\n// commitTextUpdate \u66f4\u65b0text\u3001\n// commitUpdate \u66f4\u65b0hostRoot\u7684\u5c5e\u6027\n\nfunction commitWork(current: Fiber | null, finishedWork: Fiber): void {\n  switch (finishedWork.tag) {\n    case FunctionComponent:\n    case ForwardRef:\n    case MemoComponent:\n    case SimpleMemoComponent:\n    case Block: {\n      // Layout effects are destroyed during the mutation phase so that all\n      // destroy functions for all fibers are called before any create functions.\n      // This prevents sibling component effects from interfering with each other,\n      // e.g. a destroy function in one component should never override a ref set\n      // by a create function in another component during the same commit.\n      if (\n        enableProfilerTimer &&\n        enableProfilerCommitHooks &&\n        finishedWork.mode & ProfileMode\n      ) {\n        try {\n          startLayoutEffectTimer();\n          commitHookEffectListUnmount(HookLayout | HookHasEffect, finishedWork);\n        } finally {\n          recordLayoutEffectDuration(finishedWork);\n        }\n      } else {\n        commitHookEffectListUnmount(HookLayout | HookHasEffect, finishedWork);\n      }\n      return;\n    }\n    case ClassComponent: {\n      return;\n    }\n    case HostComponent: {\n      const instance: Instance = finishedWork.stateNode;\n      if (instance != null) {\n        // Commit the work prepared earlier.\n        const newProps = finishedWork.memoizedProps;\n        // For hydration we reuse the update path but we treat the oldProps\n        // as the newProps. The updatePayload will contain the real change in\n        // this case.\n        const oldProps = current !== null ? current.memoizedProps : newProps;\n        const type = finishedWork.type;\n        // TODO: Type the updateQueue to be specific to host components.\n        const updatePayload: null | UpdatePayload =\n          (finishedWork.updateQueue: any);\n        finishedWork.updateQueue = null;\n        if (updatePayload !== null) {\n          commitUpdate(\n            instance,\n            updatePayload,\n            type,\n            oldProps,\n            newProps,\n            finishedWork\n          );\n        }\n      }\n      return;\n    }\n    case HostText: {\n      const textInstance: TextInstance = finishedWork.stateNode;\n      const newText: string = finishedWork.memoizedProps;\n      const oldText: string =\n        current !== null ? current.memoizedProps : newText;\n      commitTextUpdate(textInstance, oldText, newText);\n      return;\n    }\n    case HostRoot: {\n      if (supportsHydration) {\n        const root: FiberRoot = finishedWork.stateNode;\n        if (root.hydrate) {\n          // We've just hydrated. No need to hydrate again.\n          root.hydrate = false;\n          commitHydratedContainer(root.containerInfo);\n        }\n      }\n      return;\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function commitHookEffectListUnmount(tag: number, finishedWork: Fiber) {\n  const updateQueue: FunctionComponentUpdateQueue | null =\n    (finishedWork.updateQueue: any);\n  const lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;\n  if (lastEffect !== null) {\n    const firstEffect = lastEffect.next;\n    let effect = firstEffect;\n    do {\n      if ((effect.tag & tag) === tag) {\n        // Unmount\n        const destroy = effect.destroy;\n        effect.destroy = undefined;\n        if (destroy !== undefined) {\n          destroy();\n        }\n      }\n      effect = effect.next;\n    } while (effect !== firstEffect);\n  }\n}\n")),(0,r.kt)("h2",{id:"commitlayouteffects"},"commitLayoutEffects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"root.current = finishedWork")),(0,r.kt)("p",null,"//\u4e0b\u4e00\u4e2a\u9636\u6bb5\u662f\u5e03\u5c40\u9636\u6bb5\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u8c03\u7528\u8bfb\u53d6\u7684\u6548\u679c"),(0,r.kt)("p",null,"//\u5bbf\u4e3b\u6811\u88ab\u7a81\u53d8\u540e\u3002\u5b83\u7684\u60ef\u7528\u7528\u4f8b\u662f"),(0,r.kt)("p",null,"// layout\uff0c\u4f46\u662f\u7c7b\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e5f\u4f1a\u56e0\u4e3a\u9057\u7559\u7684\u539f\u56e0\u800c\u89e6\u53d1\u3002"),(0,r.kt)("p",null,"commitLayoutEffects\ncommitLifeCycles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u8fed\u4ee3\u51fa\u6765\nfunction commitLayoutEffects(root: FiberRoot, committedLanes: Lanes) {\n  if (enableSchedulingProfiler) {\n    markLayoutEffectsStarted(committedLanes);\n  }\n\n  while (nextEffect !== null) {\n    setCurrentDebugFiberInDEV(nextEffect);\n\n    const flags = nextEffect.flags;\n\n    if (flags & (Update | Callback)) {\n      const current = nextEffect.alternate;\n      commitLayoutEffectOnFiber(root, current, nextEffect, committedLanes);\n    }\n\n    if (enableScopeAPI) {\n      if (flags & Ref && nextEffect.tag !== ScopeComponent) {\n        commitAttachRef(nextEffect);\n      }\n    } else {\n      if (flags & Ref) {\n        commitAttachRef(nextEffect);\n      }\n    }\n\n    resetCurrentDebugFiberInDEV();\n    nextEffect = nextEffect.nextEffect;\n  }\n\n  if (enableSchedulingProfiler) {\n    markLayoutEffectsStopped();\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function commitLifeCycles(finishedRoot, current, finishedWork, committedLanes) {\n  switch (finishedWork.tag) {\n    case FunctionComponent:\n    case ForwardRef:\n    case SimpleMemoComponent:\n    case Block: {\n      // At this point layout effects have already been destroyed (during mutation phase).\n      // This is done to prevent sibling component effects from interfering with each other,\n      // e.g. a destroy function in one component should never override a ref set\n      // by a create function in another component during the same commit.\n      {\n        commitHookEffectListMount(Layout | HasEffect, finishedWork);\n      }\n\n      schedulePassiveEffects(finishedWork);\n      return;\n    }\n\n    case ClassComponent: {\n      var instance = finishedWork.stateNode;\n\n      if (finishedWork.flags & Update) {\n        if (current === null) {\n          instance.componentDidMount();\n        } else {\n          var prevProps =\n            finishedWork.elementType === finishedWork.type\n              ? current.memoizedProps\n              : resolveDefaultProps(finishedWork.type, current.memoizedProps);\n          var prevState = current.memoizedState;\n\n          instance.componentDidUpdate(\n            prevProps,\n            prevState,\n            instance.__reactInternalSnapshotBeforeUpdate\n          );\n        }\n      }\n      var updateQueue = finishedWork.updateQueue;\n\n      if (updateQueue !== null) {\n        commitUpdateQueue(finishedWork, updateQueue, instance);\n      }\n      return;\n    }\n\n    case HostRoot: {\n      // TODO: I think this is now always non-null by the time it reaches the\n      // commit phase. Consider removing the type check.\n      var _updateQueue = finishedWork.updateQueue;\n\n      if (_updateQueue !== null) {\n        var _instance = null;\n\n        if (finishedWork.child !== null) {\n          switch (finishedWork.child.tag) {\n            case HostComponent:\n              _instance = getPublicInstance(finishedWork.child.stateNode);\n              break;\n\n            case ClassComponent:\n              _instance = finishedWork.child.stateNode;\n              break;\n          }\n        }\n\n        commitUpdateQueue(finishedWork, _updateQueue, _instance);\n      }\n\n      return;\n    }\n\n    case HostComponent:\n      {\n        var _instance2 = finishedWork.stateNode; // Renderers may schedule work to be done after host components are mounted\n        // (eg DOM renderer may schedule auto-focus for inputs and form controls).\n        // These effects should only be committed when components are first mounted,\n        // aka when there is no current/alternate.\n\n        if (current === null && finishedWork.flags & Update) {\n          var type = finishedWork.type;\n          var props = finishedWork.memoizedProps;\n          commitMount(_instance2, type, props);\n        }\n\n        return;\n      }\n\n      return;\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// commitUpdateQueue;\n")))}u.isMDXComponent=!0},7479:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/commitRoot-3e0df0e2fdd38b6f30b58cbf6d3ddbf7.png"}}]);